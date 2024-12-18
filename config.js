const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HAd0xR7B#2UMuax7-27_1BRyGjNE_KnqJNZPDDZryDrUhEGzqlwk",  //මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "SAHIL🙂🫠KING",
ALIVE_MSG: process.env.ALIVE_IMG || "SAHIL🫠KING OF WHATSAPP ",
SUDO_NB: process.env.SUDO_NB || "923495705077",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "fasi",
MODE: process.env.MODE || "public",
AUTO_VOICE:"On"
};

