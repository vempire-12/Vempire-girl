const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Vempire-Girl~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lPVmVvbGRjL0pRamwvN25zcHlXaEU4dmpOOW5nZHc5dkMwd2hsc3FGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0hhZWNBelJ0cVpYcHhuV2tJQk5qOHVjcmJoOHRZNTFNWDg1TTlTZG1IUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTzVPUmlMQmdXWng5b0V6aGN6eUQ1SFNnQ29xSVVzeHVDWVVSZEJHbFdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6aGZsKzRCT1BoaWNZVEQ2TkNDTWhJVi9ZYnhOVlBWNURNUzB4eWk2ZFhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJZVMxYnE3K1R6ZUUwNHFxTldWNDBJZHpwZ1UySVQ4SldnaEdQcjFybWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR1emM5bHhnZnZWSUpCbWJ2WjNHQmpJVy9IL2V4MURhOG5iTmlpRG12aWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pzSExSTGs3NmU5MzVMdlFMbm5RaWhjMWZBRTRueGhCaVMrTCszaTFVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTEyUU5pRkp2aWRpc2Z5QVg3V3phY2FucW5OWU9NVzVIbGx5dVlpN3lFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhwZjUvK002N0dDU1RUZnZzc0xTK2x3bXpGQlpwSVVvNmFqV29NaUw1SFVCVDl5MGRNSDQ0ZFZQYWt4Z1RCcHZkU1p5WHZXV1lycXE3bzMwZWxOSkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IkJJY24xNUxzTUN6ZEhla2hWdG53R05ER29IMlQ2dEd5a3ptUndRNDlMc2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkgyUjE2TTVYIiwibWUiOnsiaWQiOiI5MjMxMzIwMDY2NTk6NzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCO4oCO4riU8J2QlfCdkIDwnZCM8J2Qj/CdkIjwnZCR8J2QhOK4lcKgwqDCoFxu4oCOwqDCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI7wk4ap4oCO8J2Qg/CdkIDwnZCN8J2QhvCdkITwnZCR8J2QjvCdkJTwnZCS8JOGqsKgwqDCoFxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbvCThqnigI7wnZCG8J2QiPCdkJHwnZCLIPCThqpcbuKAjiIsImxpZCI6IjM4MzU4NzU1OTgzOTY6NzBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKREwzdU1ERU1EQ3FzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjYmJVVXBsZDhSSmZsUWRoM2NJV1AwRG5Ba1haUUxqUEpXWlAyV2NlendnPSIsImFjY291bnRTaWduYXR1cmUiOiIxeFdhK0VOVXFjUGRDVkdUWVk2WE8vSXNqb0hVVFlZL3JINlRFRDB4RzRHZ2xzMXNZVmJibzNmUmErZ2tsKzN1akZjTC8vTHhnVzdULzQ2OWNIQVVEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT0xIQTNtbE5PYXNPbUdCTm13VlU3Q3MvZ3BGTTRDMjhQVnBOQmxsSE5vcHVrcFlhMWljc0RBV0VDeGJaL0RRU3l1SHZSS0thYnhBcUNobE1wS294RHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzIwMDY2NTk6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEcyMUZLWlhmRVNYNVVIWWQzQ0ZqOUE1d0pGMlVDNHp5Vm1UOWxuSHM4SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDEyODY5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHp6In0=",
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
