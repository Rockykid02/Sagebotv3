export const commands = [
  {
    name: 'about',
    aliases: ['info', 'creator', 'dev'],
    description: 'Learn about Sage-Bot v3 and its creator.',
    category: 'General',
    execute: async ({ sock, from, msg }) => {
      const text = `👋 *ABOUT SAGE-BOT v3*

╭━━━❒ *🤖 BOT INTRO* ❒━━━╮
┃
┃ I'm *Sage-Bot v3*, a powerful multi-device 
┃ WhatsApp bot built for speed, reliability, 
┃ and ease of use. I'm here to automate tasks,
┃ manage groups, and make your WhatsApp 
┃ experience better — 24/7. 🚀
┃
┃ ⚡ *Powered by:* Digital Dynamo Lab
┃ 📌 *Version:* 3.0.0
┃ 🛡️ *Status:* Online & Ready
┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━❒ *👨‍💻 DEVELOPER* ❒━━━╮
┃
┃ 🧑 *Name:* Sage Dickson
┃ 🌍 *From:* Zimbabwe 🇿🇼
┃ 💼 *Role:* Bot Developer & Tech Enthusiast
┃ 🚀 *Studio:* Digital Dynamo Lab
┃ 🧠 *Skills:*
┃    • JavaScript/Node.js
┃    • WhatsApp Bot Development
┃    • AI Integration
┃    • Automation & Scripting
┃
┃ 📱 *Contact:*
┃    • WhatsApp: wa.me/263780597802
┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━❒ *📖 HOW TO USE* ❒━━━╮
┃
┃ 1️⃣ *Prefix:* Use \`.\` before commands
┃    Example: \`.ping\`
┃
┃ 2️⃣ *Commands:*
┃    • \`.menu\` → Show all commands
┃    • \`.ping\` → Check bot speed
┃    • \`.alive\` → Bot status
┃    • \`.about\` → This message
┃    • \`.repo\` → Group link
┃    • \`.sleep\` → Put bot to sleep
┃    • \`.awake\` → Wake bot up
┃
┃ 3️⃣ *Need Help?*
┃    Type \`.menu\` for full command list
┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━❒ *💬 QUOTE* ❒━━━╮
┃
┃ "Made in space by Aliens 👽
┃  Brought to Earth by Sage Dickson 🛸"
┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯

🤖 *Sage-Bot v3 — Intergalactic Tech 👽 | Powered by Digital Dynamo Lab*`;

      await sock.sendMessage(from, { text });
    }
  }
];
