import DiscordBot from '#/public/discord_bot_logo.png'
import Minecraft from '#/public/minecraft.png'
import CV from '#/public/cv.png'
import Website from '#/public/website.png'
import Script from '#/public/script.png'

export async function GET () {
  const projects = [
    {
      name: 'Discord BOT: TempChannels',
      description:
                'This project is made with Discord.js library can manage automated temporary channels in a discord server.',
      badges: ['JavaScript', 'Node.js', 'Discord.js', 'CI'],
      image: DiscordBot,
      link: 'https://github.com/AtiCommunity/discord_tempchannels',
      private: false
    },
    {
      name: 'Server: Minecraft network',
      description:
                'I used Velocity proxy and Paper servers and built a strong network architecture between servers.',
      badges: ['Java', 'Velocity', 'Paper'],
      image: Minecraft,
      link: '',
      private: true
    },
    {
      name: 'Website: CV',
      description:
                'Vite.js is the perfect framework to make this static page like my CV.',
      badges: ['JavaScript', 'Vite.JS', 'TailwindCSS', 'DaisyUI', 'CI'],
      image: CV,
      link: 'https://github.com/AtiCommunity/website_cv',
      private: false
    },
    {
      name: 'Website: Project showcase',
      description:
                'Thanks to the power of Next.js to have a simple API to load my project and display a clean website in the same project.',
      badges: ['JavaScript', 'Next.JS', 'TailwindCSS', 'DaisyUI', 'CI'],
      image: Website,
      link: 'https://github.com/AtiCommunity/website_showcase',
      private: false
    },
    {
      name: 'Scripting: Automated Arch Linux installation',
      description:
                'I used bash scripting to make an automated Arch Linux installation with a simple command.',
      badges: ['Arch Linux', 'Bash', 'Pacman', 'Yay', 'CI'],
      image: Script,
      link: 'https://github.com/AtiCommunity/atiscript_archlinux_install',
      private: false
    }
  ]

  return new Response(JSON.stringify({ projects }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function POST () {
  return new Response('POST method not implemented', { status: 501 })
}
