<script lang="ts">
    // import { PUBLIC_STORE_NAME } from "$env/static/public";
    import { fade } from "svelte/transition";

    export let pictures: string[] = [];

    let index: number = 0;
    let currentPicture: string = pictures[0];
    let isImageVisible: boolean = true;

    const changePicture = () => {
        if (pictures.length > 1){
            setInterval(() => {
                isImageVisible = false;
                setTimeout(() => {
                    index = (index + 1) % pictures.length;
                    currentPicture = pictures[index];
                }, 500); 
            }, 6000);
        }
    };

    function imageIsVisible(){
        isImageVisible = true;
    }

    changePicture();

    let pageRendered: boolean = false;

    setTimeout(() => {
        pageRendered = true;
    }, 3);
</script>

<section>
    <div 
        id="hero" 
        class="absolute h-screen w-screen flex items-center px-4 mx-auto text-xl font-semibold bg-center bg-cover {pictures.length > 0 ? '' : 'bg-black'}"
    >
        {#if pageRendered}
            <div 
                class="max-w-[1279px] w-full mx-auto flex flex-col items-start gap-10 z-10 pt-40"
                transition:fade
            >
                <div class="flex flex-col items-start gap-4 text-left">
                    <p class="text-6xl text-[#ffffff] font-bold md:text-[11vw] whitespace-nowrap">
                        Flova
                    </p>

                    <p class="flex items-center text-[#ffffff] text-left font-light leading-loose xs:text-[3vw] max-w-[500px] text-sm">
                        Connect all your social media platforms into one place with ease and seamless customization.
                    </p>
                </div>
            </div>
        {/if}

        {#if pictures.length > 0}
            <img 
                src={currentPicture} 
                class:fade-in={isImageVisible}  
                alt="slideshow-pic" 
                class="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                on:load={imageIsVisible}
            />

            <div class="absolute inset-0 bg-black opacity-50"></div>
        {/if}
    </div>
</section>

<style>
    .fade-in {
        opacity: 1;
        transition: opacity 500ms ease-in-out;
    }

    img {
        opacity: 0;
        transition: opacity 500ms ease-in-out;
    }
</style>
