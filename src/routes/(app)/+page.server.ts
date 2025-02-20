import { verifyToken } from "$lib/server/auth";
import type { RequestEvent } from "@sveltejs/kit";

export const load = async (page: RequestEvent) => {
    const token = page.cookies.get("sb-access-token");
    let status: boolean = false;

    if (token) {
        try {
            const data = await verifyToken(token);

            if (data.status){
                status = true;
            } 

        } catch (error) {
            console.error("Error parsing or verifying token:", error);
        }
    }

    return {
        status: status
    }
};