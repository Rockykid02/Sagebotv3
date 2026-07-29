// Sleep state - shared across the bot
let isAsleep = false;

export const commands = [
  {
    name: 'sleep',
    aliases: ['offline', 'nap'],
    description: 'Put the bot to sleep (only owner).',
    category: 'Owner',
    execute: async ({ sock, from, msg, isOwner }) => {
      if (!isOwner) {
        await sock.sendMessage(from, { text: '❌ Only the owner can use this command.' });
        return;
      }
      
      if (isAsleep) {
        await sock.sendMessage(from, { text: '😴 I\'m already asleep! Zzz...' });
        return;
      }
      
      isAsleep = true;
      await sock.sendMessage(from, { text: '😴 *Sage-Bot v3 is going to sleep...*\n\nZzz... Wake me up with `.awake` when you need me!' });
    }
  },
  {
    name: 'awake',
    aliases: ['wake', 'online'],
    description: 'Wake the bot up (only owner).',
    category: 'Owner',
    execute: async ({ sock, from, msg, isOwner }) => {
      if (!isOwner) {
        await sock.sendMessage(from, { text: '❌ Only the owner can use this command.' });
        return;
      }
      
      if (!isAsleep) {
        await sock.sendMessage(from, { text: '🤖 I\'m already awake and ready to go!' });
        return;
      }
      
      isAsleep = false;
      await sock.sendMessage(from, { text: '🤖 *Sage-Bot v3 is awake!*\n\nGood morning! ☀️ Ready to serve you again.' });
    }
  }
];

// Export so other files can check the sleep state
export function isBotAsleep() {
  return isAsleep;
}
