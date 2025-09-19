import AtiCIcon from "#/public/favicon.ico";
import DiscordBot from "#/public/discord_bot_logo.png";
import Profile from "#/public/profile.jpg";

export async function GET() {
    const projects = [
        {
            name: "Discord BOT: TempChannels",
            description:
                "This project is made with Discord.js library can manage automated temporary channels in a discord server.",
            badges: ["JavaScript", "Node.js", "Discord.js", "CI", "PM2"],
            image: DiscordBot,
            link: "https://github.com/AtiCommunity/discord_tempchannels",
            private: false,
        },
        {
            name: "Server: Minecraft network",
            description:
                "I used Velocity proxy and Paper servers and built a strong network architecture between servers.",
            badges: ["Java", "Velocity", "Paper"],
            image: AtiCIcon,
            link: "https://github.com/AtiCommunity/website_showcase",
            private: true,
        },
        {
            name: "Website: CV",
            description:
                "Vite.js is the perfect framework to make this static page like my CV.",
            badges: ["JavaScript", "Vite.JS", "TailwindCSS", "DaisyUI"],
            image: Profile,
            link: "https://github.com/AtiCommunity/website_cv",
            private: false,
        },
        {
            name: "Website: Project showcase",
            description:
                "Thanks to the power of Next.js to have a simple API to load my project and display a clean website in the same project.",
            badges: ["JavaScript", "Next.JS", "TailwindCSS", "DaisyUI"],
            image: AtiCIcon,
            link: "https://github.com/AtiCommunity/website_showcase",
            private: true,
        },
    ];

    return new Response(JSON.stringify({ projects: projects }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function POST() {
    return new Response("POST method not implemented", { status: 501 });
}
