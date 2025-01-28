import type { RequestEvent } from "./$types";
import { redirect } from "@sveltejs/kit";
import { deleteAuthSessionTokenCookie, invalidateSession } from "$lib/server/session";

export async function POST(event: RequestEvent): Promise<Response> {
 
    invalidateSession(event.locals.session.id);
    deleteAuthSessionTokenCookie(event);
    return redirect(302, "/login");
}