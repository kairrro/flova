<script>
    import Feature from "./Feature.svelte";
</script>

<section class="flex flex-col gap-6 max-w-[1200px] mx-auto px-4">
    <div class="flex flex-col items-center gap-2 text-center" >
        <h2 class="text-3xl font-semibold" >Powerful Features to Elevate Your Biolink</h2>
        <p class="text-sm text-zinc-300 leading-[25px]" >
            Elevate your online presence with Flova's customizable links, analytics, and integrations for real-time engagement tracking.
        </p>
    </div>

    <div class="grid grid-cols-3 gap-4 md:grid-cols-1">
        <Feature 
            name="Socials" 
            title="Over 30+ Social Platforms" 
            description="Flova gives you a variety of social platform links to add to your biolink." 
        />
        
        <Feature 
            name="Discord"
            title="Discord Integration" 
            description="Boost your online presence by showcasing your Discord activity." 
        />
        
        <Feature 
            name="Music" 
            title="Background Music" 
            description="Set the mood with personalized background music for your page." 
        />

        <Feature 
            name="Premium" 
            title="Premium Subscription" 
            description="Elevate your biolink with our premium service for a personalized, standout online presence." 
        />
        <Feature 
            name="Customization" 
            title="Customization" 
            description="Craft a distinctive online identity with our premium service, personalizing your biolink for maximum impact." 
        />
        <Feature 
            name="view_count" 
            title="Track your profile engagement" 
            description="Monitor your online presence using our analytics feature, giving you the ability to track your profile views." 
        />
    </div>
</section>