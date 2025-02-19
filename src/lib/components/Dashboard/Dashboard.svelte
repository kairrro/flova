<script lang="ts">
    import { 
        description, profile_picture, user, display_name, profile_opacity, text_color, premium, background, 
        audio, greeting, typewriter, discord_id, badge_color, sparkle, icon_color, description_color,
        mediaButtonsDisabled, notificationMessage, notificationType, notificationState,
        currentLink
    } from "$lib/scripts/stores/values";
    import { backgroundFileTypes, avatarFileTypes, audioFileTypes, sparkleTitles } from "$lib/scripts/globals/misc";
    import { Save, Trash } from "$lib/scripts/logos";
    import { isValidFileType } from "$lib/scripts/functions/misc";
    import Input from "../custom/Input.svelte";
    import { sparkleColors } from "$lib/scripts/globals/misc";
    import Dropdown from "../custom/Dropdown.svelte";
    import { createEventDispatcher } from "svelte";
    import { removeMedia } from "$lib/scripts/functions/dashboard";
    import type { MediaType } from "$lib/scripts/types/misc";
    import { onMount } from "svelte";

    const dispatch = createEventDispatcher();

    const time = new Date();
    const hours = time.getHours();

    let opacity = $profile_opacity;
    
    let success: boolean | undefined;
    let apiResponse: string = "";
    let sparkleState: boolean = false;
    let saveButtonDisabled: boolean = false;

    let backgroundSizeLimit: number = 20;
    let avatarSizeLimit: number = 6;
    let audioSizeLimit: number = 15;

    premium.subscribe(value => {
        if (value){
            backgroundSizeLimit = 50;
            avatarSizeLimit = 20;
            audioSizeLimit = 30;
        }
    })

    if (hours >= 0 && hours < 12) {
        greeting.set(`Good morning, ${$user}`);

    } else if (hours >= 12 && hours < 18) {
        greeting.set(`Good afternoon, ${$user}`);
        
    } else {
        greeting.set(`Good evening, ${$user}`);
    }

    function handleOnChange(event: any) {
        profile_opacity.set(event.target.value);
    }

    function notify(message: string, detail = "") {
        apiResponse = `${message}: ${detail}`;
        success = false;
        
        notificationMessage.set(apiResponse);
        notificationType.set("error");
        notificationState.set(true);
        setTimeout(() => { notificationState.set(false) }, 3000);
    }

    function getSizeLimitAndValidTypes(type: MediaType) {
        const limits = {
            background: backgroundSizeLimit,
            profile_picture: avatarSizeLimit,
            audio: audioSizeLimit
        };
        
        const validTypes = {
            background: backgroundFileTypes,
            profile_picture: avatarFileTypes,
            audio: audioFileTypes
        };

        return {
            sizeLimit: limits[type],
            validTypes: validTypes[type]
        };
    }

    async function uploadFile(file: File, type: MediaType) {
        try {
            mediaButtonsDisabled.set(true);
            const formData = new FormData();
            formData.append("file", file);
            
            const response = await fetch(`/api/upload/${type}`, { method: "POST", body: formData });

            if (response.ok) {
                window.location.reload();
            } else {
                console.error("Upload failed:", response.statusText);
            }

        } catch (error) {
            console.error("Error uploading file:", error);

        } finally {
            setTimeout(() => { mediaButtonsDisabled.set(false) }, 3000);
        }
    }

    async function handleFileChange(event: Event, type: MediaType) {
        const target = event.target as HTMLInputElement;
        
        if (target.files && target.files.length > 0) {
            const file = target.files[0];
            const sizeInMB = Number((file.size / (1024 * 1024)).toFixed(2));

            const { sizeLimit, validTypes } = getSizeLimitAndValidTypes(type);

            if (!isValidFileType(file, validTypes)) {
                notify("Invalid file type", validTypes.join(', '));
                return;
            }

            if (sizeInMB > sizeLimit) {
                notify(`File size exceeds the limit of ${sizeLimit}MB`);

            return;
        }

        dispatch("change", { file });

        const reader = new FileReader();
        reader.onload = () => uploadFile(file, type);
        reader.onerror = () => console.error("File reading error");
        reader.readAsArrayBuffer(file);
    }
}

    async function updateAccount(){
        try {
            const payload = {
                username: $user === "" ? null : $user,
                display_name: $display_name,
                avatar_url: $profile_picture,
                audio: $audio,
                background: $background,
                description: $description,
                text_color: $text_color,
                typewriter: $typewriter,
                discord_id: $discord_id,
                profile_opacity: $profile_opacity,
                badge_color: $badge_color,
                sparkle: $sparkle,
                icon_color: $icon_color,
                description_color: $description_color
            }

            saveButtonDisabled = true;

            const response = await fetch(`/api/account/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(payload)            
            })

            const data = await response.json();

            console.log(data);

            if (response.status === 200){
                success = true;
                apiResponse = data.message;

            } else if (response.status == 400){
                success = false;
                apiResponse = data.message;
            }
        }

        catch (error){
            console.error(error)
        }

        finally {
            notificationMessage.set("Placeholder text here");
            notificationType.set(success ? "success" : "error"); 

            setTimeout(() => {
                saveButtonDisabled = false;
                success = undefined;
            }, 3000);
        }
    }

    function toggleSparkleOption(){
        sparkleState = !sparkleState;
    }

    function setSparkle(color: string | null){
        sparkle.set(color);
        toggleSparkleOption();
    }

    onMount(() => {
        currentLink.set("/dashboard");
    })
</script>

    
<section class="mb-20">
    <div class="welcome">
        <img 
            src={$profile_picture === null || $profile_picture === "" ? "/assets/default.jpg" : $profile_picture} 
            alt="avatar" 
            class="w-[100px] h-[100px] hidden md:flex rounded-lg object-cover"
        />
        
        <div class="flex flex-col gap-2 md:mt-6" > 
            <h2 class="text-2xl font-semibold">{$greeting}</h2>
            <p class="text-sm text-zinc-300">Customize your biolink according to your preferences.</p>
        </div>

        <div class="flex flex-col gap-10 mt-10">
            <div class="grid grid-cols-2 gap-10 lg:grid-cols-1" >
                <div class="flex flex-col gap-2">
                    <p class="text-sm" >Username</p>
                    <div class="flex items-center">
                        <div class="py-[8px] px-2 bg-[#0f0f0f] text-sm">flova.xyz/</div>
                        <Input 
                            name="username"
                            id="username"
                            type="text"
                            bind:value={$user}
                            label={false}
                        />
                    </div>
                </div>

                <Input 
                    name="Display Name"
                    id="display_name"
                    type="text"
                    bind:value={$display_name}
                />
            </div>

            <div class="grid grid-cols-1 gap-10" >
                <div class="flex flex-col gap-2" >
                    <div class="flex items-center justify-between" >  
                        <label for="avatar_url" class="text-sm" >Avatar</label>
                        <p class="text-xs text-zinc-300" >Max Size Limit: {avatarSizeLimit}MB</p>
                    </div>
                    {#if $profile_picture}
                        <button 
                            class="flex items-center justify-center gap-2 bg-[#303030] mr-auto px-6 w-full rounded-lg text-xs py-2 transition hover:opacity-50" 
                            on:click={() => removeMedia("profile_picture")}
                            disabled={$mediaButtonsDisabled}
                        >
                            {@html Trash()}
                            <p>Remove Avatar</p>
                        </button>

                        <a 
                            class="text-xs text-zinc-300 transition hover:text-indigo-400" 
                            href={$profile_picture}
                            target="_blank"
                        >
                            {$profile_picture}
                        </a>
                    {:else}
                        <input 
                            type="file" 
                            id="avatar_url" 
                            class="bg-[#212121] text-sm h-10 rounded-lg outline-none w-full cursor-pointer file:bg-[#333] file:border-none file:px-3 file:py-2 file:text-zinc-300 file:rounded-md file:cursor-pointer"
                            on:change={(event) => handleFileChange(event, "profile_picture")}
                        />
                    {/if}
                </div>

                <div class="flex flex-col gap-2" >
                    <div class="flex items-center justify-between" >
                        <label for="background" class="text-sm" >Background</label>
                        <p class="text-xs text-zinc-300" >Max Size Limit: {backgroundSizeLimit}MB</p>
                    </div>
                    {#if $background}
                        <button 
                            class="flex items-center gap-2 justify-center bg-[#303030] mr-auto w-full rounded-lg text-xs py-2 transition hover:opacity-50" 
                            on:click={() => removeMedia("background")}
                            disabled={$mediaButtonsDisabled}
                        >
                            {@html Trash()}
                            <p>Remove Background</p>
                        </button>

                        <a 
                            class="text-xs text-zinc-300 transition hover:text-indigo-400" 
                            href={$background}
                            target="_blank"
                        >
                            {$background}
                        </a>
                    {:else}
                        <input 
                            type="file" 
                            id="background" 
                            class="bg-[#212121] text-sm h-10 rounded-lg outline-none w-full cursor-pointer file:bg-[#333] file:border-none file:px-3 file:py-2 file:text-zinc-300 file:rounded-md file:cursor-pointer"
                            on:change={(event) => handleFileChange(event, "background")}
                     
                        />
                    {/if}
                </div>
            </div>

            <div class="flex flex-col gap-2" >
                <div class="flex items-center justify-between" >
                    <label for="music" class="text-sm" >Music</label>
                    <p class="text-xs text-zinc-300" >Max Size Limit: {audioSizeLimit}MB</p>
                </div>
                {#if $audio}
                    <button 
                        class="flex items-center gap-2 justify-center bg-[#303030] mr-auto w-full rounded-lg text-xs py-2 transition hover:opacity-50" 
                        on:click={() => removeMedia("audio")}
                        disabled={$mediaButtonsDisabled}
                    >
                        {@html Trash()}
                        <p>Remove Music</p>
                    </button>

                    <a 
                        class="text-xs text-zinc-300 transition hover:text-indigo-400" 
                        href={$audio}
                        target="_blank"
                    >
                        {$audio}
                    </a>
                {:else}
                    <input 
                        type="file" 
                        id="music" 
                        class="bg-[#212121] text-sm h-10 rounded-lg outline-none w-full cursor-pointer file:bg-[#333] file:border-none file:px-3 file:py-2 file:text-zinc-300 file:rounded-md file:cursor-pointer"
                        on:change={(event) => handleFileChange(event, "audio")}
                    />
                {/if}
            </div>

            <div class="flex flex-col gap-4" >
                <div class="flex flex-col gap-[6px]" >
                    <h2 class="text-xl font-semibold" >Description</h2>
                    <p class="text-xs text-zinc-300" >
                        Write a short bio on your page.
                    </p>
                </div>

                <Input 
                    name="Description"
                    id="description"
                    type="text"
                    textarea={true}
                    label={false}
                    bind:value={$description}
                    maxTextLength={100}
                />
            </div>

            <Input 
                name="Discord ID"
                id="discord_id"
                type="text"
                bind:value={$discord_id}
                disabled={true}
                placeholder="Under development"
            />

            <div class="flex flex-col gap-2">
                <label for="profile-opacity" class="text-sm font-medium text-gray-300">Profile Opacity</label>
                
                <div class="flex items-center gap-4">
                    <input 
                        id="profile-opacity" 
                        type="range" 
                        min="0" 
                        max="100" 
                        bind:value={opacity} 
                        on:input={handleOnChange}
                        class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        style="background: linear-gradient(to right, #7358f9 0%, #7358f9 {opacity}%, #374151 {opacity}%, #374151 100%);"
                    />
                    <span class="text-sm font-medium text-gray-400">{opacity}%</span>
                </div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-1 gap-10" >
                <div class="flex flex-col gap-2 w-full">
                    <label for="badge_color" class="text-sm">Badge Color</label>
                    <div class="flex items-center gap-2">
                        <div class="relative w-10 h-10">
                            <input 
                                type="color" 
                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                bind:value={$badge_color}
                            />
                            <div class="absolute inset-0 w-[24px] h-[24px] rounded-full pointer-events-none inset-0 m-auto" style="background-color: {$badge_color};"></div>
                        </div>
                    
                        <Input 
                            name="Badge Color"
                            id="badge_color"
                            type="color"
                            bind:value={$badge_color}
                            label={false}
                        />
                    </div>
                </div>

                <div class="flex flex-col gap-2 w-full">
                    <label for="icon_color" class="text-sm">Icon Color</label>
                    <div class="flex items-center gap-2">
                        <div class="relative w-10 h-10">
                            <input 
                                type="color" 
                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                bind:value={$icon_color}
                            />
                            <div class="absolute inset-0 w-[24px] h-[24px] rounded-full pointer-events-none inset-0 m-auto" style="background-color: {$icon_color};"></div>
                        </div>
                    
                        <Input 
                            name="Icon Color"
                            id="icon_color"
                            type="color"
                            bind:value={$icon_color}
                            label={false}
                        />
                    </div>
                </div>

                <div class="flex flex-col gap-2 w-full">
                    <label for="username_color" class="text-sm" >Username Color</label>
                    <div class="flex items-center gap-2">
                        <div class="relative w-10 h-10">
                            <input 
                                type="color" 
                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                bind:value={$text_color}
                            />
                            <div class="absolute inset-0 w-[24px] h-[24px] rounded-full pointer-events-none inset-0 m-auto" style="background-color: {$text_color};"></div>
                        </div>
                    
                        <Input 
                            name="Username Color"
                            id="username_color"
                            type="color"
                            bind:value={$text_color}
                            label={false}
                        />
                    </div>
                </div>

                <div class="flex flex-col gap-2 w-full">
                    <label for="description" class="text-sm" >Description Color</label>
                    <div class="flex items-center gap-2">
                        <div class="relative w-10 h-10">
                            <input 
                                type="color" 
                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                bind:value={$description_color}
                            />
                            <div class="absolute inset-0 w-[24px] h-[24px] rounded-full pointer-events-none inset-0 m-auto" style="background-color: {$description_color};"></div>
                        </div>
                    
                        <Input 
                            name="Description Color"
                            id="description_color"
                            type="color"
                            bind:value={$description_color}
                            label={false}
                        />
                    </div>
                </div>
            </div>

            <Dropdown 
                message="Username Sparkle"
                options={[
                    "Pick an option", "Blue Sparkle", "Black Sparkle", "Green Sparkle", "Red Sparkle", "Pink Sparkle", "White Sparkle", "Yellow Sparkle",
                ]}
                onPick={(option) => setSparkle(sparkleColors[option])}
                equippedValue={sparkleTitles[$sparkle ?? "Pick an option"] ?? "Pick an option"}
                    
            />

            {#if $premium}
                <div class="flex flex-col gap-2">
                    <p id="enable-typewriter" class="text-sm font-medium">Enable Typewriter</p>
         
                    <label class="relative inline-block w-12 h-6">
                        <input 
                            type="checkbox" 
                            id="typewriter" 
                            bind:value={$typewriter} 
                            bind:checked={$typewriter} 
                            class="opacity-0 w-0 h-0 peer"
                        />
                        <span class="slider round absolute top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all peer-checked:bg-blue-500"></span>
                        <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:transform peer-checked:translate-x-6"></span>
                    </label>
                </div>
            {/if}
        </div>
    </div>

    <button 
        class="flex items-center gap-4 text-sm mt-10 px-10 py-2 rounded-lg bg-[#303030] transition {saveButtonDisabled ? "opacity-50" : "hover:opacity-50"}" 
        on:click={() => updateAccount()} 
        disabled={saveButtonDisabled}
    >
        {@html Save(undefined, "18px")}
        <p>Save</p>
    </button>
</section>

<style>
    input {
        outline: none;
        background: transparent;
        fill: none;
    }
</style>