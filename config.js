const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhoSTl4anFNZWtCeXFuc1JXUVJGSHdIdjY0RHRaNUtnd1dWaXgwUjZuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnFNTUVjaEVxOGZSWTdxcSt3L3hOSG8vN3RKK2l6Ky9wUzd1d2RUMWV6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQkYrNnpKVG9kdllZRnFVVXFMWUJjSFlFM1pvUEJwR0lmd0QzZTRjTm1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOUp0QW0yZTVOQ084Ny9vMTBDYkJjd0lDS0ZXVTJodDlCWW12MkVqWkNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIOE1GQUxyTEJsMGFsZWZTNUZpYTdsVDZxZXlURlRnMUJ2RXVHbUQrMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkplYkh1MVdrVk45aHFFMEJjMlZURVRJVXZKVHdQTWU2VS9ZU2RLaWZ0M2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUE0Zm5wVFIxZzd2OU9tZjlwdGVPMUJrR29YVHZ3Q2Ftc3VwcmZnWHNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2lWZGFoMUNnVUtwdFdXTzhpWGlPbU9tdUNlZE9mR2hPeHFpaVRWMkVScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY0QW53NGIvQmthdmN5a1lRRVd3Y0pOV0wySk1oZ0tnSVpmQTdHc0lDemFwQ29pa3hrVEpnaDVxeXZDQlNxMmZmcm1vUGo5M0Jnc0hncnptR0xMOERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJqUHJWSHVYS1h0TGhJQmFDWno4OVpkTlZxMmdQS1pmMVQ1WGlhbHdJbDIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzMjAwNjY1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNzc5REZERTE4MjVEREY0NkZENjA0RTRGQkFCRkE2NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1OTAwNTg2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJENDlKTU1LQSIsIm1lIjp7ImlkIjoiOTIzMTMyMDA2NjU5OjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKAjuKAjuK4lPCdkJXwnZCA8J2QjPCdkI/wnZCI8J2QkfCdkITiuJXCoMKgwqBcbuKAjsKgwqDCoMKgXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCO8JOGqeKAjvCdkIPwnZCA8J2QjfCdkIbwnZCE8J2QkfCdkI7wnZCU8J2QkvCThqrCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7wk4ap4oCO8J2QhvCdkIjwnZCR8J2QiyDwk4aqXG7igI4iLCJsaWQiOiIzODM1ODc1NTk4Mzk2OjY1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXZMM3VNREVLUFZvOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY2JiVVVwbGQ4UkpmbFFkaDNjSVdQMERuQWtYWlFMalBKV1pQMldjZXp3Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSjRpTExPRTJKOWk3M0FrVkdIb01Cb0hyRHdrWlhka3krQ2xsZjR4ZWhoWEVueFpraWdxaGhPVnBubjFSN1czSjdRMDBZRFpIUGZhTDc1MTlSRWhxQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ing0cGtoZkJ3T2MzMnZCNW5zL0J2cHB5dkNCZDdnYUdqRlZwOWJNVUJ6VFgxL3ZHUW90aC9mMmQ3ZTZuS0hNOGQwWFlFQTA3S0c3VUFZWFh6WTB4RkRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTMyMDA2NjU5OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhHMjFGS1pYZkVTWDVVSFlkM0NGajlBNXdKRjJVQzR6eVZtVDlsbkhzOEkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTkwMDU4MiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhDRSJ9",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ulkfxz.jpg",
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
OWNER_NAME: process.env.OWNER_NAME || "*Vempire-girl Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Vempire-girl Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ulkfxz.jpg",
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
