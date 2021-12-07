let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*SC? Awokwaok Ngemis:v*

_Iya Iya Nih Gw Kasih:_
https://www.mediafire.com/file/7bw413fu5dfmo6v/ByBotzV1.zip/file
Jangan Diperjual Belikan Ya Sayang:v
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Awaokwaok Ngemis SC:v*', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 20

module.exports = handler
 
