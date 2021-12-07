let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*TUTORIAL MASANG SC ByBotzV1:*

Langkah Langkah Nya:
Download SC nya Terlebih Dahulu(ketik .sc)
Setelah Itu Extrak File Ke SdCard
Selanjut Ada Di Dalam Video Yang Sudah Sekalian Owner Simpan Di File Sc

Aplikasi Yang Diperlukan:
Zarchiver
QuickEdit
Termux

 Yaa!!
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['tutor']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
