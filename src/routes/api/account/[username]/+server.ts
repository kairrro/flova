import type { RequestHandler } from "@sveltejs/kit";
import { fetchUser } from "$lib/server/user";
import { extractTokenFromCookies } from "$lib/server/misc";
import { verifyToken } from "$lib/server/auth";

export const GET: RequestHandler = async ({ params, request }) => {
    try {
        const username = params?.username;

        if (username === undefined) {
            throw new Error("Username parameter is missing.");
        }

        const cookies = request.headers.get("Cookie");
        const token = extractTokenFromCookies(cookies);
        const tokenVerification = JSON.parse(JSON.stringify(await verifyToken(token || "")));
        
        if (tokenVerification.status){
            const uuid = tokenVerification.message.id;
            const response = await fetchUser(uuid);

            return new Response(JSON.stringify(response));

        } else {
            return new Response(JSON.stringify({ "error" : "Invalid token" }), {
                status: 400,
            })
        }

    } catch (error) {
        console.error(`Error: ${error}`);

        return new Response("Internal Server Error", {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
};