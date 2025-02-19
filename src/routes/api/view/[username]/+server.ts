import type { RequestHandler } from "@sveltejs/kit";
import { addView } from "$lib/server/user";

export const POST: RequestHandler = async (event) => {
    const username = event.params?.username;

    if (username){
        const ipAddress = event.getClientAddress();
        const addedView = await addView(username, ipAddress);

        const payload = {
            success: addedView.status ? true : false
        }

        return new Response(JSON.stringify(payload));

    } else {
        const payload = {
            message: "No username given"
        }

        return new Response(JSON.stringify(payload), {
            status: 400,
        })
    }
}