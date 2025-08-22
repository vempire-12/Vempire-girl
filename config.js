const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdUWmIwYU9oQ1MyUVdzbTdtejdReUl5Q29ybWFCRXRncWllcDlrVXJXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakYrdytuQjNYTExtMGNwVHMrOEdKeXN3aDZGbW1YRUZaV2lXV2JxSE9FUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSllTaGNTWmU1cEVtbVRKUW1ibU5keWxwWm1BMUI0MDFoVkZITnZVem5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxeHNRNzFvMTRmSVVpSWwwQS9BSlhsYzlhemE4dSs4cUEzcEFxNDFqdlZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIUjhkWThGMzdpUmNVNUxFcjcrQzk1VlRJM1ozUnQyUEFUbERmM3p4SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNRN1hOMEgwTUJGdzBOVlRTNEFDQTVCTysxckFzQlVIcUFpQUZIc2orZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1Paisva3R2dzVnY2lORi9RNW0zVDVPd3hsTGRYdmRyMjhoWEhGMlZsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3V1c2k1MjNQN2Jyam5SWTU1bTRFMWxoWlZXSy9MTzRQOHZ1UlcrUGZEaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtpZm85SnhGZ0NHZXh6L0tNTWFTdDd6NGlHRll6WGpRbEc2d04yeXM1cHNMM3dNNEhzR3JMSEc1WmkxY1RyY2pUTmVEZnBldnY1OWtia0ZKM1dyWUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJzR2ZqeFZjWGI4UkhaQXdFN1BsaVoyUW5ZT3VsVTN5cXlTYUYydWtJZW9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKV1pTTThFViIsIm1lIjp7ImlkIjoiOTIzMTMyMDA2NjU5OjYyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKAjuKAjuK4lPCdkJXwnZCA8J2QjPCdkI/wnZCI8J2QkfCdkITiuJXCoMKgwqBcbuKAjsKgwqDCoMKgXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCO8JOGqeKAjvCdkIPwnZCA8J2QjfCdkIbwnZCE8J2QkfCdkI7wnZCU8J2QkvCThqrCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7wk4ap4oCO8J2QhvCdkIjwnZCR8J2QiyDwk4aqXG7igI4iLCJsaWQiOiIzODM1ODc1NTk4Mzk2OjYyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWpMM3VNREVKWG5vc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY2JiVVVwbGQ4UkpmbFFkaDNjSVdQMERuQWtYWlFMalBKV1pQMldjZXp3Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWjczdGtMTkRUUGROeVJrcEh2ckhNbG5vNFpXWm9QVG9vS2V6STJJWUJIcXR5cnZiUm94UWk1MHBJbmVqaE9aWmRTRzU2WlhtWi8wZ1YxYjRpK0d1RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InE3NzZ1REtuaU9IZ2dKaHZsdHJiQm9RV2E1OXhnZmpJQVNxQmNWSEJHZ1JCOHh4T2lheW42UDNXQk1oQ3pNR2xjV3BHN3FpeVlsTjMvTFVock4rZER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTMyMDA2NjU5OjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhHMjFGS1pYZkVTWDVVSFlkM0NGajlBNXdKRjJVQzR6eVZtVDlsbkhzOEkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTg4NjQ4NywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhXYSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Vempire-girl🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Vempire-girl",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Vempire-girl",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
