
import type { RequestEvent } from "./$types";
import { redirect } from "@sveltejs/kit";
import { dev } from '$app/environment';

export async function load(event: RequestEvent) {
    if (!dev && (event.locals.session == undefined ||
        event.locals.session === null ||
        event.locals.user === null)) {
        return redirect(302, "/login");
    }

    return {
        user: event.locals.user
    };
}

