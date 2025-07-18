import type { clickOutsideAction } from "../types/misc";
import { notificationMessage, notificationState, notificationType } from "../stores/values";

export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function hasVideoExtension(url: string): boolean {
    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'wmv', 'flv', 'webm'];
    const parts = url.split('.');
    const urlExtension = parts.length > 1 ? parts[parts.length - 1].toLowerCase() : null;
    return urlExtension !== null && videoExtensions.includes(urlExtension);
}

export function removeCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export function setCookie(token: string){
    document.cookie = `sb-access-token=${token}; path=/; expires=${new Date(Date.now() + 1 * 60 * 60 * 1000).toUTCString()}; secure; samesite=strict`;
}

export const clickOutside: clickOutsideAction = (element) => {
    function handleClick(event: MouseEvent) {
      const targetEl = event.target as HTMLElement

      if (element && !element.contains(targetEl)) {
        const clickOutsideEvent = new CustomEvent('outside')
        element.dispatchEvent(clickOutsideEvent)
      }
    }

    document.addEventListener('click', handleClick, true)

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true)
      },
    }
}

export function getCookieValue(name: string) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
}

export function isValidPassword(password: string | undefined): boolean {
    if (typeof password !== 'string') {
        return false;
    }
    return password.length >= 8;
}

export function isValidFileType(file: File, validTypes: string[]): boolean {
    const fileType = file.type.toLowerCase();
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    return validTypes.some(type => type.toLowerCase() === `.${fileExtension}` || type.toLowerCase() === fileType);
}

export function notify(message: string, success: boolean = false) {
    notificationMessage.set(message);
    notificationType.set(success ? "success" : "error");
    notificationState.set(true);
    setTimeout(() => { notificationState.set(false) }, 3000);
}

export function extractFileNameFromUrl(url: any): string | null {
    if (!url) return null; 
    try {
        return new URL(url).pathname.split("/").pop() || null;
    } catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
}