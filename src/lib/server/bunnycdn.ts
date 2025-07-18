import { BUNNYCDN_API_KEY } from "$env/static/private";
import { bunnycdnURL } from "$lib/scripts/globals/bunnycdn";
import type { CustomResponse } from "$lib/scripts/types/misc";

export async function uploadFile(fileName: string, fileData: any): Promise<CustomResponse>{
    try {
        const response = await fetch(`${bunnycdnURL}/${fileName}`, {
            method: "PUT",
            headers: {
                "AccessKey": BUNNYCDN_API_KEY,
                'Content-Type': 'application/octet-stream',
                "accept": "application/json"
            },
            body: fileData
        });

        if (response.status === 201){
            return {
                success: true,
                message: `https://cdn.flova.xyz/${fileName}`,
            }

        } else {
            return {
                success: false,
                message: "Error while uploading file"
            }
        }

    } catch (error){
        return {
            success: false,
            message: error,
        }
    }
}

export async function getFile(fileName: string) {
    try {
        const response = await fetch(`${bunnycdnURL}/${fileName}`, {
            method: "GET",
            headers: { "AccessKey": BUNNYCDN_API_KEY },
        });

        return {
            success: response.ok, 
            message: response.ok ? "File retrieved successfully" : `Error: ${response.statusText}`,
        };

    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unknown error occurred",
        };
    }
}

export async function deleteFile(fileName: string) {
    try {
        const response = await fetch(`${bunnycdnURL}/${fileName}`, {
            method: "DELETE",
            headers: { "AccessKey": BUNNYCDN_API_KEY },
        });

        return {
            success: response.ok, 
            message: response.ok ? "File deleted successfully" : `Error: ${response.statusText}`,
        };
        
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unknown error occurred",
        };
    }
}