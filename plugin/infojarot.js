let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Farel
│ ✎ _Sekolah_ : esempe
│ ✎ _Umur_ : 15
│ ✎ _Asal_ : sulteng
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup 1_ :
│    ----
│ ✎ _Official Grup 2_ :
│    ---
│ ✎ _WhatsApp_ :
│    wa.me/6282290452317
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
