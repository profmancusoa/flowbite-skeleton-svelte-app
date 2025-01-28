import type { RequestEvent } from "@sveltejs/kit";
import { PrismaDB } from "./db";
import { encodeBase32, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import type { Session } from "@prisma/client";
import { SESSION_TIMEOUT } from "$env/static/private";

const DB = new PrismaDB();

export async function validateSessionToken(token: string): Promise<Session|null> {
    let sessionDB : Session | null = null;
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

    try {
        sessionDB = await DB.session.findUnique({
            where: {
                token: token
            }
        });
    } catch (e) {
        console.log(e)
    }
   
    return sessionDB
}

export async function invalidateSession(sessionId: string): Promise<void> {
    await DB.session.deleteMany({
        where: { id: +sessionId }
    });
}

// export async function invalidateUserSessions(userId: number): Promise<void> {
//     await DB.session.deleteMany({
//         where: { userId: userId }
//     });
// }

export function setSessionTokenCookie(event: RequestEvent, token: string, expiresAt: Date): void {
    event.cookies.set("session", token, {
        httpOnly: true,
        path: "/",
        secure: import.meta.env.PROD,
        sameSite: "lax",
        expires: expiresAt
    });
}

export function deleteAuthSessionTokenCookie(event: RequestEvent): void {
    event.cookies.set("session", "", {
        httpOnly: true,
        path: "/",
        secure: import.meta.env.PROD,
        sameSite: "lax",
        maxAge: 0
    });

    event.cookies.set("google_oauth_state", "", {
        httpOnly: true,
        path: "/",
        secure: import.meta.env.PROD,
        sameSite: "lax",
        maxAge: 0
    });

    event.cookies.set("google_code_verifier", "", {
        httpOnly: true,
        path: "/",
        secure: import.meta.env.PROD,
        sameSite: "lax",
        maxAge: 0
    });

}

export function generateSessionToken(): string {
    const tokenBytes = new Uint8Array(20);
    crypto.getRandomValues(tokenBytes);
    const token = encodeBase32(tokenBytes).toLowerCase();
    return token;
}

export async function createSession(token: string, userId: number, picture: string): Promise<Session> {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

    console.log("SESSION TIMEOut:", SESSION_TIMEOUT)
    const newSession: Session = {
        sessionId,
        token,
        expiresAt: new Date(new Date().getTime() + Number(SESSION_TIMEOUT)), //set session cookie expiry
        picture,
        userId
    };

    // rimuovo eventuali vecchie sessioni
    await DB.session.deleteMany({
        where: { userId: userId }
    });

    // utente valido quindi crea la sessione con scadenza SESSION_TIMEOUT
    try {
        await DB.session.create({
            data: newSession 
        });

    } catch (e) {
        console.log(e)
    }

    return newSession;
}

