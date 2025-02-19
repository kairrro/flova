import type { RequestHandler } from "@sveltejs/kit";
import { extractTokenFromCookies } from "$lib/server/misc";
import { verifyToken } from "$lib/server/auth";
import { uploadFile } from "$lib/server/bunnycdn";
import type { CustomResponse } from "$lib/scripts/types/misc";
import { updateMedia } from "$lib/server/user";

export const POST: RequestHandler = async ({ request }) => {
    let message;
    let statusCode;

    try {
        const cookies = request.headers.get("Cookie");
        const token = extractTokenFromCookies(cookies);
        const tokenVerification = await verifyToken(token || "");
        const uuid = tokenVerification.message.id;

        if (tokenVerification.status) {
            const formData = await request.formData();

            const file = formData.get('file'); 

            if (!file || !(file instanceof Blob)) {
                return new Response(JSON.stringify({"error": "No valid file provided"}), {
                    status: 400,
                });
            }

            const fileName = file.name;
            const fileExtension = fileName.split('.').pop();

            const uploadResult: CustomResponse = await uploadFile(crypto.randomUUID() + "." + fileExtension, file); 

            message = uploadResult.message;
            statusCode = 200;

            if (uploadResult.success){
                await updateMedia(uuid, uploadResult.message, "audio");
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
