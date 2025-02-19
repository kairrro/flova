<script lang="ts">
    import { fade } from "svelte/transition";
    import Rule from "./Rule.svelte";

    let payment = [
        `You are only permitted to have a maximum of 1 account on our site. Any additional accounts found by you will be removed.`
    ];

    let harrassment: string[] = [
        `We do not condone harassment on the website. This includes doxxing, sending hate speech using our platform, IP logging, phishing, or any form of malicious intent against anyone.`
    ];

    let termination: string[] = [
        `
            We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if You breach these Terms and Conditions.
        `,
        `
            Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your
            Account, You may simply discontinue using the Service.
        `
    ];

    let orderCancellation: string[] = [
        `
            We reserve the right to refuse or cancel Your Order at any time for certain reasons including but not limited
            to: Products availability, Errors in the description or prices for Products, Errors in Your Order.
        `,
        `
            We reserve the right to refuse or cancel Your Order if fraud or an unauthorized or illegal transaction is
            suspected.
        `
    ];

    let inaccuracies: string[] = [
        `
            We are constantly updating Our offerings of Products on the Service. The Products available on Our
            Service may be mispriced, described inaccurately, or unavailable, and We may experience delays in
            updating information regarding our Products on the Service and in Our advertising on other websites.
        `,
        `
            We cannot and do not guarantee the accuracy or completeness of any information, including prices,
            product images, specifications, availability, and services. We reserve the right to change or update
            information and to correct errors, inaccuracies, or omissions at any time without prior notice.
        `
    ];

    let yourInformation: string[] = [
        `
            If You wish to place an Order for Products available on the Service, You may be asked to supply certain
            information relevant to Your Order including, without limitation, Your name, Your email, Your phone number,
            Your credit card number, the expiration date of Your credit card, Your billing address, and Your shipping
            information.
        `,
        `
            You represent and warrant that: (i) You have the legal right to use any credit or debit card(s) or other
            payment method(s) in connection with any Order; and that (ii) the information You supply to us is true,
            correct and complete.
        `,
        `
            By submitting such information, You grant us the right to provide the information to payment processing
            third parties for purposes of facilitating the completion of Your Order.
        `
    ];

    let pageRendered = false;

    setTimeout(() => {
        pageRendered = true;
    }, 5)
</script>

<svelte:head>
    <title>Terms and Conditions</title>
</svelte:head>

{#if pageRendered}
    <section class="flex flex-col gap-10 mx-auto max-w-[1279px] px-10 mt-40" transition:fade >
        <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-3xl">Terms and Conditions</h1>
            <p class="text-zinc-300" >Please read these terms and conditions carefully before using Our Service.</p>
        </div>

        <div class="flex flex-col gap-16" >
            <Rule 
                title = "Payment"
                rules = {payment}
            />

            <Rule 
                title = "Harrassment"
                rules = {harrassment}
            />

            <Rule 
                title = "Exploits and Vulnerabilities"
                rules = {[
                    `You agree to reporting any exploit or bug you find on the site. Additionally, you are not permitted to spam any of our software.`
                ]}
            />

            <Rule 
                title = "Content"
                rules = {[
                    `You are completely responsible for the content you upload to this service. We do not condone any form of media that can be deemed as harmful, NSFW, pirated, or illegal.`
                ]}
            />

            <Rule 
                title = "Your Account"
                rules = {[
                    `You agree not to engage in selling or trading your accounts. You are also prohibited from sharing your account details with other users.`
                ]}
            />

            <Rule 
                title = "Changes to Terms and Conditions"
                rules = {[`By using our services, you agree that our terms of service are subject to change at any given time.`]}
            />
        </div>
    </section>
{/if}