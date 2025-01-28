import { redirect } from "@sveltejs/kit";
import { dev } from "$app/environment";
import type { RequestEvent } from "../$types";

export async function load(event: RequestEvent) {
    if (!dev && !event.locals.session) {
        return redirect(302, "/login");
    }

    return {};
}
