import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { validateToken } from '$lib/server/misc';
import { createNewUser } from '$lib/server/auth';
import { TURNSTILE_SECRETKEY } from '$env/static/private';

async function verifyCredentials(email: string, username: string, password: string | null, confirm_password: string | null){
    if (!email || !username || !username || !password || !confirm_password){
        return {
            message: "Please complete the registration form",
            status: false,
        }

    } else if (password !== confirm_password){
        return {
            message: "Your passwords do not match",
            status: false,
        }

    } else if (username.length < 3){
        return {
            message: "Your username cannot be less than 3 characers",
            status: false,
        }
    }

    return {
        message: "Successful",
        status: true,
    }
}

export const actions = {
    default: async (event) => {
        const { request } = event;
        const data = await request.formData();

        const email = String(data.get("email"));
        const password = String(data.get("password"));
        const confirm_password = String(data.get("confirm_password"));
        const username = String(data.get("username"));
        const cf_token = String(data.get("cf-turnstile-response"));

        const verifyInfo = await verifyCredentials(email, username, password, confirm_password);

        if (verifyInfo.status){
            const { success } = await validateToken(cf_token, TURNSTILE_SECRETKEY);

            if (success){
                const accountCreation = await createNewUser(email, username, password);
                if (accountCreation.status){
                    throw redirect(303, "verify");

                } else {
                    return {
                        message: accountCreation.message,
                        status: false,
                    }
                }

            } else {
                return {
                    message: "Invalid captcha token",
                    status: false,
                }
            }

        } else {
            return {
                message: verifyInfo.message,
                status: false,
            }
        }
    }
} satisfies Actions