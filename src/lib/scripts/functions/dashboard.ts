import type { CustomResponse, MediaType } from "../types/misc";
import { mediaButtonsDisabled } from "../stores/values";

export async function removeMedia(type: MediaType): Promise<CustomResponse> {
    try {
        mediaButtonsDisabled.set(true);

        const response = await fetch(`/api/remove/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const data: CustomResponse = await response.json();

        if (response.status === 200) {
            window.location.reload();
            return { success: true, message: `${type} removed` };

        } else {
            return { success: false, message: data.message };
        }
        
    } catch (error) {
        console.error(error);
        return { success: false, message: String(error) };

    } finally {
        setTimeout(() => { mediaButtonsDisabled.set(false) }, 3000);
    }
}