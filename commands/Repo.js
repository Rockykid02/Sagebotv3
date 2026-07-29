export const commands = [
  {
    name: 'repo',
    aliases: ['repository', 'github'],
    description: 'Get the bot repository link and stats.',
    category: 'Social',
    execute: async ({ sock, from, msg }) => {
      const text = `🤖 *Sage-Bot v3*

A powerful, open-source WhatsApp bot built for speed, reliability, and ease of use.

🔗 *GitHub Repository:*
https://Na forget it

👥 *WhatsApp Group:*
https://chat.whatsapp.com/IJF0fahUsSB1P1MYD4ri6W

📊 *Repository Stats:*
• Stars: ⭐ 1,757
• Forks: 🍴 6,342
• Watchers: 👀 1,757
• Created: 📅 22/02/2024
• Last Updated: 🔄 12/06/2026

👤 *Developer:* Sage Dickson
⚡ *Powered By:* Digital Dynamo Lab
🙏 *Credits:* Franceking

⭐ *Star the repository if you like the bot!*
🍴 *Don't forget to fork and watch for updates!*`

      await sock.sendMessage(from, { text })
    }
  }
]
