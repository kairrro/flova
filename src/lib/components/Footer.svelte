<script>
    import { Discord, Instagram } from "$lib/scripts/socials";

    const currentYear = new Date().getFullYear();
</script>

<footer class="w-full max-w-[1279px] mx-auto" >
    <div class="flex justify-center items-center gap-20 py-16 px-6 md:px-4 md:flex-col md:gap-10 md:items-start">
        <div class="flex flex-col items-start gap-2 md:items-start md:gap-4">
            <a 
                class="flex items-center gap-2 hover:scale-105 transition md:items-start md:flex-col md:gap-4" 
                href="/"
            >
                <img 
                    src="/favicon.png" 
                    alt="logo"
                    class="w-16"
                />
                <h2 class="text-3xl font-semibold" >Flova</h2> 
            </a>
            <p class="text-sm" >Copyright © Hone Services {currentYear}</p>
        </div>

        <div class="flex flex-col gap-2 text-sm">
            <a 
                href="/privacy" 
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Privacy
            </a>
            <a 
                href="/faq" 
                class="hover:underline underline-offset-2 mr-auto" 
            >
                FAQ
            </a>
            <a 
                href="/tos" 
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Terms of Service
            </a>
        </div>

        <div class="flex flex-col gap-2 text-sm">
            <a 
                href="/login"
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Login
            </a>
            <a 
                href="/register"
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Register
            </a>
        </div>

        <div class="flex items-center gap-4">
            <a href="/" target="_blank" class="hover:scale-110 transition">
                {@html Discord("#f1f1f1", "34px")}
            </a>

            <a href="/" target="_blank" class="hover:scale-110 transition" >
                {@html Instagram("#f1f1f1", "34px")}
            </a>
        </div>
    </div>
</footer>