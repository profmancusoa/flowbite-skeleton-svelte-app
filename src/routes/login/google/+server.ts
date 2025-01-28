import type { RequestEvent } from "./$types";
import { google } from "$lib/server/oauth";
import { generateCodeVerifier, generateState } from "arctic";

export function GET(event: RequestEvent): Response {
   
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    console.log("GOOGLE STATE:", state)
    console.log("GOOGLE codeVerifier:", codeVerifier)

    const url = google.createAuthorizationURL(state, codeVerifier, ["openid", "profile", "email"]);
    
    event.cookies.set("google_oauth_state", state, {
        httpOnly: true,
        maxAge: 60,
        secure: import.meta.env.PROD,
        path: "/",
        sameSite: "lax"
    });

    event.cookies.set("google_code_verifier", codeVerifier, {
        httpOnly: true,
        maxAge: 60,
        secure: import.meta.env.PROD,
        path: "/",
        sameSite: "lax"
    });

    return new Response(null, {
        status: 302,
        headers: {
            Location: url.toString()
        }
    });
}
