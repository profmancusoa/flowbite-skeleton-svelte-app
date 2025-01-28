import type { RequestEvent } from "./$types";

export async function load(event: RequestEvent) {
    return {
        session: event?.locals?.session,
    };
}