let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *DANA:* [081267439077]]
┣➥ *TELKOMSEL:* [081267439077]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6281267439077*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
