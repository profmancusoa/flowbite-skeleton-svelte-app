import type { RequestEvent } from "../$types";
import { redirect } from "@sveltejs/kit";

export async function load(event: RequestEvent) {
    if (event.locals.session !== null) {
        return redirect(302, "/");
    }

    return {};
}
