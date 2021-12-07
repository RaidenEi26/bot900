let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup (maks 5 grup)!
│
│ > Bonus :
│• Diberi 5 Limit Setiap Hari
│
│ > Harga :
│• 5K / Bulan (4 Minguu)
│• 10K / VIP (Permanen)
│
│ > Pembayaran :
│• DANA : 081267439077
│• TELKOMSEL : 081267439077
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^(premium)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler