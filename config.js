const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Vempire-Girl~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUV4Wjk1TGlaWWxEVnNaMmdEM1FOdTArSUV6Zm5CUXRYRm8wQTBIMDNtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmhvWERkNUxmVDR5eDh2WmtWY1p4MjUraGdVMVBuNlRHb0xBVU1FRFdsOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QXA2RVY5SS9TYmZHaGVLdVlCT1VsMEQ2RG5XR1pKRFBYMW1Hb1RaRzNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFaERlMHJleGZOckw1M2dLL2dCSGQ0dDg0Z2J2cVhFdmdRbi9OUHJVRkJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJQ3B6a29JTEZ0R0wwZjRhalR5ZzNWenlsT1FGTTBiMnN4VGNzMUN6VmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ydUx4aEpWbzkraGpyK1NJRFdFbkNmbjU5UVNKVm1aMmY0RlJ2L2FPRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtXV09JaVcwT0ptSGZKdGlrK1cySzdqTG8zbVdPMXFFckExdTJGWjMwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFA5TDNrUXRXcmtSeG9VbjllQTJIQ3JvZU5lcTlPSklQUmtqTytXVHFUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxiaCtwaHZGWjF3Z2dtbmpQNXFpc0FYTzZsNzZoUGVPVEhWMW5xN3dDeDhLTXplVVJJdWF6Mk5vRDVsbGxXemFFOEJTQ0xmQjltanI0MW5zY0N5VGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6IjBMNFVWZGI0SlVxL3NReFZING1BeTQzTEdrcWJKVENndG5CQXp3T29PMzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTMyMDA2NjU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0MERBNDVFMjAwM0M4NkZEMkE4RkVCRTI5ODY2RjU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwMzQ3NTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlRBSzc2R0NGIiwibWUiOnsiaWQiOiI5MjMxMzIwMDY2NTk6NzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCO4oCO4riU8J2QlfCdkIDwnZCM8J2Qj/CdkIjwnZCR8J2QhOK4lcKgwqDCoFxu4oCOwqDCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI7wk4ap4oCO8J2Qg/CdkIDwnZCN8J2QhvCdkITwnZCR8J2QjvCdkJTwnZCS8JOGqsKgwqDCoFxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbvCThqnigI7wnZCG8J2QiPCdkJHwnZCLIPCThqpcbuKAjiIsImxpZCI6IjM4MzU4NzU1OTgzOTY6NzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKTEwzdU1ERU1EdHE4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjYmJVVXBsZDhSSmZsUWRoM2NJV1AwRG5Ba1haUUxqUEpXWlAyV2NlendnPSIsImFjY291bnRTaWduYXR1cmUiOiIrRDJoVG5qeE04V29xN0NzaU1UZjFYcWR2Wm5sRlpaQ2RMQS91QlJ5ZitBOG9CeHlEMEJRMUYxajJLWkZzMDRDclYxQnR5Q3hIcHVMUnJJT09zVlhBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUlcrWEoyaFk2ampvVkpkdkpOUE1teWowbThhcHdKOThTL2M5NnRxTVlJeFRlZFZoRm9qeEx3MDlmcmV6WXhEcDJRNkpjd1BQR25XYUxRQkFoTEc1alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzIwMDY2NTk6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEcyMUZLWlhmRVNYNVVIWWQzQ0ZqOUE1d0pGMlVDNHp5Vm1UOWxuSHM4SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDM0NzU2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmtnIn0=",
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
