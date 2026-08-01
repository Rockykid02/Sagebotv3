import now from 'performance-now'

if (!global.botStartTime) global.botStartTime = Date.now()

export const commands = [
  {
    name: 'ping',
    aliases: ['latency', 'speed'],
    description: "Checks the bot's response time",
    category: 'General',

    execute: async ({ sock, from, msg }) => {
      const start = now()
      const jid = from

      // Send a simple ping message
      const startTime = Date.now()
      
      await sock.sendMessage(jid, {
        text: '🏓 Pong!'
      })

      const latency = Date.now() - startTime

      // Send the latency as a separate message
      await sock.sendMessage(jid, {
        text: `⏱️ *_Sage-Bot v3 Speed: ${latency} ms_*`
      })
    }
  },
  {
    name: 'uptime',
    aliases: ['runtime'],
    description: 'Displays the bot uptime',
    category: 'General',

    execute: async ({ sock, from, msg }) => {
      const uptime = Date.now() - global.botStartTime
      const formatted = formatUptime(uptime)

      await sock.sendMessage(from, {
        text: `⏳ *_Sage-Bot v3 UPTIME: ${formatted}_*`
      })
    }
  }
]

function formatUptime(ms) {
  const sec = Math.floor(ms / 1000) % 60
  const min = Math.floor(ms / (1000 * 60)) % 60
  const hr = Math.floor(ms / (1000 * 60 * 60)) % 24
  const day = Math.floor(ms / (1000 * 60 * 60 * 24))

  const parts = []

  if (day) parts.push(`${day} day${day > 1 ? 's' : ''}`)
  if (hr) parts.push(`${hr} h`)
  if (min) parts.push(`${min} m`)
  parts.push(`${sec} s`)

  return parts.join(', ')
}
