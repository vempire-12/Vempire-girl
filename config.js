const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRrRXpTV2YySkhDNnJxQTRIS1ZCVG9RaGRSR2ZpNzh2c3lSam1MaEQyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkx5UWNKUDVSSC9PdFM2RkhlMnBkdjFpS2k2VmpZa0NHVDltZUJKNFhFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT1hnSldBd05UYzRhTU1Qb0V2cEdCUWxuMmVnb09ReGZvMGNtbjFsOEVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyaDNMRGYrTGdvaUlPNzN0YUxTaG5jWWdzM0ZMOTBzNE9Mc29odVJHeTN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JbG1HUnFnM1Nld0NSQWpDZUlISC9uSThESjZHbldGVmR5aVU0TkJWRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI3ZFdLU1hXR0tFSm85dy9Hc1ovazhWL3UwUUtqK3dHME5vQXdUNVpzbnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUY4MUJpOWcvVmdSazhyV0FnWkc5eHlBanEzR1NiT1MwUVA4ZVVtUi9IQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjB3RlEvalJaRG1QR0FCbE11THFhWDM2cThSK25XLytYWjBhcVhqODVrZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk0OUdObzR5STJPeXZMOThhejMzZzh2anNEUTNHa3RHdnNIb01mWTBIQW1lRmhIL3ZjNG9wWDBHOElsVnF4RUlqc1pSRExtZ2xEYzJhK3docEtadGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6Im9laTVlMmNCdXc5S01ERFQwZG9VWk1GZnRoZ29pYWpvcmZaVlkyVUJ2bDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlNZQzc2NDU4IiwibWUiOnsiaWQiOiI5MjMxMzIwMDY2NTk6NTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCO4oCO4riU8J2QlfCdkIDwnZCM8J2Qj/CdkIjwnZCR8J2QhOK4lcKgwqDCoFxu4oCOwqDCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI7wk4ap4oCO8J2Qg/CdkIDwnZCN8J2QhvCdkITwnZCR8J2QjvCdkJTwnZCS8JOGqsKgwqDCoFxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbvCThqnigI7wnZCG8J2QiPCdkJHwnZCLIPCThqpcbuKAjiIsImxpZCI6IjM4MzU4NzU1OTgzOTY6NTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUEwzdU1ERUlYb2k4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjYmJVVXBsZDhSSmZsUWRoM2NJV1AwRG5Ba1haUUxqUEpXWlAyV2NlendnPSIsImFjY291bnRTaWduYXR1cmUiOiJOMVlEY2duTHRQeVBjd2pYT3NVV3ZBZXRYcTRkSnh5Rzl0QW5yVFllc2VCeWp6T1BleGcva0wzL1JXTHJBREhHcUFTK1NON0prZWN4MlBKck9YRURCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTTdZL21CNWttSGFDQWxZTzF2TmlkU3V6WlNNUk5lOHNaVHEybW95Vy9meTc1K2NZbXZyMEZMb3RMdDJnMmljQTA0blNVaDBidUg5UDFlcm9VQ3BjakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzIwMDY2NTk6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEcyMUZLWlhmRVNYNVVIWWQzQ0ZqOUE1d0pGMlVDNHp5Vm1UOWxuSHM4SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NTA5NzY5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXllIn0=",
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
