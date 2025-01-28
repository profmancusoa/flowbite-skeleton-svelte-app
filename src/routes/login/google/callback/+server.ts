import type { RequestEvent } from "./$types";
import { google } from "$lib/server/oauth";
import { getUserFromEmail } from "$lib/server/user";
import { createSession, generateSessionToken, setSessionTokenCookie } from "$lib/server/session";
import { decodeIdToken, OAuth2Tokens } from "arctic";

export async function GET(event: RequestEvent): Promise<Response> {
    console.log("CALLBACK RUN")
    const storedState = event.cookies.get("google_oauth_state") ?? null;
    const codeVerifier = event.cookies.get("google_code_verifier") ?? null;
    const code = event.url.searchParams.get("code");
    const state = event.url.searchParams.get("state");

    
    if (storedState === null || codeVerifier === null || code === null || state === null) {
        return new Response("Please restart the process1.", {
            status: 400
        });
    }
    if (storedState !== state) {
        return new Response("Please restart the process2.", {
            status: 400
        });
    }

    let tokens: OAuth2Tokens;
    try {
        tokens = await google.validateAuthorizationCode(code, codeVerifier);
    } catch (e) {
        return new Response("Please restart the process.", {
            status: 400
        });
    }

    const claims = decodeIdToken(tokens.idToken());

    const existingUser = await getUserFromEmail(claims.email);
    if (existingUser !== null) {
        const sessionToken = generateSessionToken();
        const session = await createSession(sessionToken, existingUser.id, claims.picture ?? '');
        setSessionTokenCookie(event, sessionToken, session.expiresAt);
        
        return new Response(null, {
            status: 302,
            headers: {
                Location: "/"
            }
        });        
    } else {
        console.error("Cannot find user in DB!!");
        return new Response(null, {
            status: 302,
            headers: {
                Location: "/login?error=1"
            }
        });
    }
}
