import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ resolve, event }) => {
    event.locals.theme = event.cookies.get("theme") || "dark"

    return await resolve(event)
}
