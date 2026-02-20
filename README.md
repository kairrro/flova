# Flova

A lightweight, modern, and fully open-source biolink website. Easily create a page with all your important links in one place. Built to be simple, fast, and secure! Making this open source as I do not have time to work on this project anymore.

# Stack
- Supabase: Database and Authentication
- Cloudflare Turnstile: Used for captcha verification
- BunnyCDN: CDN
- Vercel: Hosting
- Discord Webhook: For logging

# Getting Started
- Clone the repository
git clone https://github.com/kairrro/flova
cd flova

- Install dependencies
npm install or yarn

- Setup Environment Variables: Create a .env file in the root of the project and add the following variables:

# Environment Variables
- TURNSTILE_SECRETKEY = Secret key for Cloudflare Turnstile
- PUBLIC_TURNSTILE_SITEKEY = Public key for Turnstile used on the frontend for challenge rendering.
- SUPABASE_KEY = API key for your Supabase database to read/write user data.
- BUNNYCDN_API_KEY = API key for BunnyCDN to manage and serve media files quickly.
- DISCORD_WEBHOOK = URL for a Discord webhook to log events like signups.
- BLOB_READ_WRITE_TOKEN = Token to access your blob storage for reading/writing user uploads.

# Run Locally
- npm run dev
- Visit http://localhost:5173 to see the site!

# Deploying to Vercel
- Go to Vercel and create a new project.
- Connect your GitHub repository.
- Add the same environment variables in the Vercel dashboard.