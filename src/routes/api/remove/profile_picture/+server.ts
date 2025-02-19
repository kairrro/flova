import type { RequestHandler } from "@sveltejs/kit";
import { extractTokenFromCookies } from "$lib/server/misc";
import { verifyToken } from "$lib/server/auth";
import { removeMedia } from "$lib/server/user";

export const POST: RequestHandler = async ({ request }) => {
    let message;
    let statusCode;

    try {
        const cookies = request.headers.get("Cookie");
        const token = extractTokenFromCookies(cookies);
        const tokenVerification = await verifyToken(token || "");
        const uuid = tokenVerification.message.id;

        if (tokenVerification.status) {
            const result = await removeMedia(uuid, "profile_picture");

            console.log(result);

            if (result.success){
                message = "Avatar removed";
                statusCode = 200;
            }

        } else {
            message = "Token not found";
            statusCode = 400;
        }

    } catch (error) {
        message = "Internal server error";
        statusCode = 500;
    }

    return new Response(JSON.stringify({ message: message }), {
        status: statusCode,
    });
};
