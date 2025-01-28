import { validateSessionToken, setSessionTokenCookie, deleteSessionTokenCookie } from "$lib/server/session";
// import { sequence } from "@sveltejs/kit/hooks";
import type { Handle } from "@sveltejs/kit";
import { dev } from '$app/environment';

// export const handle: Handle = async ({ event, resolve }) => {
//     if(!dev) {
//         const token = event.cookies.get("session") ?? null;
//         console.log("HANDLE TOKEN FROM COOKIES:", token)
//         if (token === null) {
//             event.locals.user = null;
//             event.locals.session = null;
//             return resolve(event);
//         }

//         const { session, user } = await validateSessionToken(token);
//         console.log("HANDLE SESSION:", session)
//         console.log("HANDLE USER:", user)
//         // if (session !== null) 
//         //     setSessionTokenCookie(event, token, session.expiresAt);
//         // else 
//         //     deleteSessionTokenCookie(event);
        
//         event.locals.session = session;
//         event.locals.user = user;
//     } else {
//         event.locals.session = null;
//         event.locals.user = null;
//     }
    
//     return resolve(event);
// };


export const handle: Handle = async ({ event, resolve }) => {
    // event.locals.user = null;
    event.locals.session = null;

    if(!dev) {
        const token = event.cookies.get("session") ?? null;
        console.log("HANDLE TOKEN FROM COOKIES:", token)
        if (token === null) return resolve(event);
        

        const session  = await validateSessionToken(token);
        console.log("HANDLE SESSION:", session)
        // console.log("HANDLE USER:", user)
        // if (session !== null) 
        //     setSessionTokenCookie(event, token, session.expiresAt);
        // else 
        //     deleteSessionTokenCookie(event);
        event.locals.session = session;
        // event.locals.user = user;
    } 
    return resolve(event);
};

