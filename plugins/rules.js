let handler = async m => m.reply(`
┏━━°❀❬ *PERATURAN BOT* ❭❀°━━┓
┃
┃> PERINGATAN :
┃• Telpon/VC = Blok Otomatis
┃ 
┃> BANNED :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃• Menghina Bot
┃
┃> BANNED SEMENTARA :
┃• Laporan Request Fitur Palsu/Main-Main
┃• Laporan Bug Pada Fitur Palsu/Main-Main
┃
┃> BANNED + BLOK PERMANEN :
┃• Merusak Nama Baik Bot
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• Spam Menu Ga Jelas
┃
┃
┃> Note : 
┃• Bot Ini Gratis Jadi Tidak DiJual Beli Atau Disewakan
┃• Script Bot Ini Tidak Diperjual Belikan 
┃• Setiap Pengguna Bot NonPremium Hanya Bisa Memasukkan Kedalam Grup Maks 1 Grup Saja
┃• Bot Tidak 24 Jam, Setiap Malam Akan Di Off Kan Oleh Owner
┃• Jika Bot Delay Itu Salah Kalian Yang Tidak Donasi:v
┃• Cewek Selalu Benar❎, Owner Selalu Benar✔️
┃
┗━━━━━━━━━━━━━━━

┏━━°❀❬ *DONASI* ❭❀°━━┓
┃ *IYA IYA DOANG KAGAK DONASI🗿*
┣➥ *AXIS:* [083805870343]
┣➥ *XL:* [087833996829]
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules'] 
handler.tags = ['info'] 
handler.command = /^(button)$/i

module.exports = handler