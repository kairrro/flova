import type { RequestHandler } from "@sveltejs/kit";
import { extractTokenFromCookies } from "$lib/server/misc";
import { verifyToken } from "$lib/server/auth";
import { deleteFile, uploadFile } from "$lib/server/bunnycdn";
import type { CustomResponse } from "$lib/scripts/types/misc";
import { updateMedia } from "$lib/server/user";
import { getColumnOfUser } from "$lib/server/user";
import { extractFileNameFromUrl } from "$lib/scripts/functions/misc";
import type { MediaType } from "$lib/server/types";

export const POST: RequestHandler = async ({ request, params }) => {
    const media: MediaType = params?.media as MediaType;

    if (media === undefined) {
        throw new Error("Media parameter is missing.");
    }

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
            
            const existingMedia = await getColumnOfUser("audio", uuid);

            if (existingMedia.success && existingMedia.value && 'audio' in existingMedia.value) {
                const fileName = extractFileNameFromUrl(existingMedia.value.audio);

                if (fileName) {
                    const result = await deleteFile(fileName);

                }
            }

            const uploadResult: CustomResponse = await uploadFile(crypto.randomUUID() + "." + fileExtension, file); 

            message = uploadResult.message;
            statusCode = 200;

            if (uploadResult.success){
                await updateMedia(uuid, uploadResult.message, media);
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