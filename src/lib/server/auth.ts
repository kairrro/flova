import { createClient } from "@supabase/supabase-js";
import { messageDiscordWebhook } from "./misc";
import { DISCORD_WEBHOOK } from "$env/static/private";

export const SUPABASE_URL = "https://nfeoimbkskulevvxpwxi.supabase.co";
export const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZW9pbWJrc2t1bGV2dnhwd3hpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDk5NTM5OSwiZXhwIjoyMDIwNTcxMzk5fQ.dUPAf2isr6fGrHpsdUMeeWeR_oz_z2AUmW1ChaOWH2M"
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signInWithPassword(email: string, password: string){
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (!error){
        const token = data.session.access_token;
        const refreshToken = data.session.refresh_token;
        const metadata = data.user.user_metadata;

        return {
            token: token,
            refresh_token: refreshToken,
            metadata: metadata
        }
    }

    else {
        return "Invalid credentials"
    }
}

export async function verifyToken(token: string){
    if (token){
        const { data, error } = await supabase.auth.getUser(token);

        if (!error && data.user){
            return {
                message: data.user,
                status: true
            }
        }

        else {
            return {
                message: "Invalid token",
                status: false
            }
        }
    }

    return {
        message: "No token given",
        status: false
    }
}

interface CustomResponse {
    message: string;
    status: boolean
}

export async function checkAvailability(username: string, email: string): Promise<CustomResponse>{
    try {
        const { data, error } = await supabase
            .from("Users")
            .select("email, username")
            .or(`username.eq.${username}, email.eq.${email}`)
      
        if (!error && data[0]){
            if (email === data[0].email){
                return {
                    message: "This email has been taken",
                    status: false,
                }

            } else if (username === data[0].username){
                return {
                    message: "This username has been taken",
                    status: false,
                }
            } 
        }

        return {
            message: "Credential check successful",
            status: true,
        }

    } catch (error){
        console.error(error);
        return {
            message: "An unknown error occured",
            status: false,
        }
    }
}

export function checkSignUpDetails(email: string, username: string, password: string): CustomResponse | void{
    const blacklist = [
        'account', 'links', 'premium', 'faq', 'signup', 'login', 'register', 'dashboard', 'verify', 'tos', 'fuck', 'nigger', 'pussy',
    ];
    const whitelistedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    const blacklistedEmails = ['zbock', 'nezid', 'omeie', 'zslsz'];
    const [, domain] = email.split('@');

    if (blacklistedEmails.some(blacklistedDomain => domain.includes(blacklistedDomain))){
        return {
            message: "The email you provided has been blacklisted",
            status: false,
        }
    }

    for (let i = 0; i < username.length; i++){
        if (!whitelistedChars.includes(username[i])){
            return {
                message: `Your username cannot contain '${username[i]}'`,
                status: false
            };
        }
    }

    if (blacklist.includes(username.toLowerCase())){
        return {
            message: `This username has been taken`,
            status: false
        };
    }

    if (password.length < 8){
        return {
            message: "Your password length must be upto 8 characters",
            status: false
        }
    }
}

export async function createNewUser(email: string, username: string, password: string): Promise<CustomResponse>{
    const checkup = checkSignUpDetails(email, username, password)

    if (checkup && !checkup.status) {
        return checkup;
    }

    const availability = await checkAvailability(username, email);

    if (availability.status){
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                }
            }
        });

        if (!error){
            await messageDiscordWebhook(DISCORD_WEBHOOK, `New user signed up!\n\nEmail: ${email}\nUsername: ${username}`);

            return {
                message: "Account successfully created",
                status: true,
            }

        } else {
            return {
                message: "Error while creating account",
                status: false,
            }
        }

    } else {
        return {
            message: availability.message,
            status: false,
        }
    }
}

export async function resetPassword(password: string){
    const { data, error } = await supabase.auth.updateUser({
        password: password,
    });

    console.log(data, error);
}