import { createClient } from "@supabase/supabase-js";
import { removeCookie, setCookie } from "../functions/misc";
import { goto } from "$app/navigation";
import { localAuth } from "../stores/values";

export const SUPABASE_URL = "https://nfeoimbkskulevvxpwxi.supabase.co";
export const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZW9pbWJrc2t1bGV2dnhwd3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5OTUzOTksImV4cCI6MjAyMDU3MTM5OX0.lmOV2JTvl7mNOikICsURPINqsinddioNbJ9V1HrvZd0";

export const supabase = createClient(SUPABASE_URL, PUBLIC_KEY);

export async function verifyToken(token: string){
    try {
        if (token){
            const { data, error } = await supabase.auth.getUser(token)
    
            if (!error){
                return data.user;

            } else {
                const { error } = await supabase.auth.getSession();

                if (error){
                    return {
                        error: error.message,
                    }
                }
            }
        }
    
        return {
            error: "JWT token not found",
        }

    } catch (error){
        console.error(error);
        return {
            error: error,
        }
    }
}

function compareAccessTokens(newToken: string){
    if (!localAuth) return true;

    const jsonn = JSON.parse(localAuth);
    const localAccessToken = jsonn.access_token ?? "";

    return localAccessToken === newToken;
}

export async function checkSession(){
    try {
        let access_token;
        const { data, error } = await supabase.auth.getSession();
        const isNewSession = !compareAccessTokens(String(data.session?.access_token));
        
        if (isNewSession){
            window.location.reload();
        }

        if (data.session?.access_token && !error){
            access_token = data.session?.access_token;
            setCookie(access_token);
        }

    } catch (error){
        console.error(error);
    }
}

export async function signOutLocally(){
    try {
        const { error } = await supabase.auth.signOut();
        removeCookie("sb-access-token");
        
        if (!error) {
            console.log("Logged out successfully");
            goto("/")
        } 
        
        else {
            console.error(error.message);
        }
        
    } catch (error) {
        console.error("An unexpected error occurred during sign out:", error);
    }
}

export async function checkSessionValidity(){
    const { data, error } = await supabase.auth.getSession();

    return data.session && !error;
}