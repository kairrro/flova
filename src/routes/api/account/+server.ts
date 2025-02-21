import type { RequestHandler } from "@sveltejs/kit";
import { extractTokenFromCookies, checkAudio, checkAvatar, checkBackgroundImage, checkVideo, checkUsernameChange } from "$lib/server/misc";
import { verifyToken } from "$lib/server/auth";
import { updateAccountData, getPremium } from "$lib/server/user";

export const POST: RequestHandler = async ({ request }) => {
  try {
    const cookies = request.headers.get("Cookie");
    const token = extractTokenFromCookies(cookies);
    const tokenVerification = JSON.parse(JSON.stringify(await verifyToken(token || "")));

    if (tokenVerification.status){
      const uuid = tokenVerification.message.id;
      const { 
        username, 
        display_name, 
        avatar_url, 
        audio, 
        profile_opacity, 
        background, 
        description, 
        text_color, 
        typewriter, 
        discord_id,
        badge_color,
        sparkle,
        icon_color,
        description_color
      } = await request.json();
      const premiumStatus = await getPremium(username);

      const [
          backgroundIsVideo,
          backgroundIsImage,
          avatarIsImage,
          audioVerification,
          checkUsernameChangeCooldown
      ] = await Promise.all([
          checkVideo(premiumStatus.value, background),
          checkBackgroundImage(premiumStatus.value, background),
          checkAvatar(premiumStatus.value, avatar_url),
          checkAudio(premiumStatus.value, audio),
          await checkUsernameChange(uuid, username)
      ]);

      const validations = [
        {
          condition: !checkUsernameChangeCooldown.status,
          message: checkUsernameChangeCooldown.message,
        },
        {
          condition: !backgroundIsVideo && !backgroundIsImage,
          message: "Your background is invalid",
        },
        {
          condition: !premiumStatus.value && typewriter,
          message: "You need premium to enable the typewriter effect.",
        },
        {
          condition: !avatarIsImage.status,
          message: avatarIsImage.message,
        },
        {
          condition: !audioVerification.status,
          message: audioVerification.message,
        },
        {
          condition: String(description).length > 120,
          message: "Description can only be up to 120 characters",
        },
        {
          condition: text_color !== "#f1f1f1" && !premiumStatus.value,
          message: "You need premium to change your text color.",
        },
        {
          condition: String(username).length > 20,
          message: "Your username cannot be more than 20 characters",
        },
        {
          condition: String(username).length < 3,
          message: "Your username cannot be less than 3 characters",
        },
        {
          condition: String(display_name).length > 26,
          message: "Your display name cannot be more than 26 characters",
        },
      ];
        
      const validationError = validations.find((v) => v.condition);

      if (validationError) {
        return new Response(JSON.stringify({ message: validationError.message }), { status: 400 });
      }
      
      const accountData = await updateAccountData(
        uuid, 
        username, 
        display_name, 
        avatar_url, 
        audio, 
        background, 
        description, 
        text_color, 
        typewriter, 
        discord_id,
        profile_opacity,
        badge_color,
        sparkle,
        icon_color,
        description_color
      );

      let statusCode: number;

      if (accountData.status === "success") {
        statusCode = 200;

      } else {
        statusCode = 400;
      }

      return new Response(JSON.stringify({ message: accountData.message, status: statusCode === 200 ? true : false }), {
        status: statusCode,
      });
    }

    else {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      })
    }

  } catch (error) {
    console.error(`Error: ${error}`);

    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
