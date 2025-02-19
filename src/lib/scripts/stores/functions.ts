import { addLinkOpen, addLinkState, mobileSidebarOpen, notificationState, premiumState } from "./values";

export function closeNotification(){
    notificationState.set(false);
}

export function togglePremiumUI(boolean: boolean){
    premiumState.set(boolean);
}

export function closePremiumUI(){
    premiumState.set(false);
}

export function toggleMobileSidebar(boolean: boolean){
    mobileSidebarOpen.set(boolean);
}

export function toggleAddLinkPanel(boolean: boolean) {
    addLinkState.update(state => ({
        ...state,        
        status: boolean
    }));
}