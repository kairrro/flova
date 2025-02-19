import { verifyToken } from "$lib/server/auth";
import type { RequestEvent } from "@sveltejs/kit";

export const load = async (page: RequestEvent) => {
    const token = page.cookies.get("sb-access-token");

    if (token) {
        try {
            const data = await verifyToken(token);

            if (data.status){
                return {
                    status: true,
                }

            } else {
                return {
                    status: false,
                }
            }

        } catch (error) {
            console.error("Error parsing or verifying token:", error);
        }
    }
};