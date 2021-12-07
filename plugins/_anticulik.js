let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6281267439077
• *Telkomsel:* 6281267439077
• *Indosat:* 6281267439077

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/ananglimit26_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6281267439077', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler