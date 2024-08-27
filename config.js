const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_14_06_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJocFBVNGNscEV2MnFZOWt6OU9IeGI0Q1NuV04xSDQ2T3UybDZ0R3N1bElBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3d2R2bE1CdFRTLUZMTDRqdE1tUUtRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxMDI5OTZiLWFiN2UtNDNlYi1hMmRkLTgyNTc0YTM2YWExYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICA3NCxcbiAgICAgIDI0MyxcbiAgICAgIDEzOCxcbiAgICAgIDEwMyxcbiAgICAgIDksXG4gICAgICAxNTIsXG4gICAgICAyMzcsXG4gICAgICAxMjIsXG4gICAgICAzMSxcbiAgICAgIDE2OSxcbiAgICAgIDE3NyxcbiAgICAgIDk1LFxuICAgICAgMjUxLFxuICAgICAgMjQ3LFxuICAgICAgODQsXG4gICAgICAyMTksXG4gICAgICA0MyxcbiAgICAgIDgyLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTgzLFxuICAgICAgNTEsXG4gICAgICAxNDgsXG4gICAgICAxODUsXG4gICAgICAyMzIsXG4gICAgICAxMixcbiAgICAgIDg3LFxuICAgICAgNzAsXG4gICAgICAyMixcbiAgICAgIDIzOSxcbiAgICAgIDIzNSxcbiAgICAgIDE2NSxcbiAgICAgIDE1NCxcbiAgICAgIDIyNCxcbiAgICAgIDIzMixcbiAgICAgIDI0MSxcbiAgICAgIDEzOCxcbiAgICAgIDMxLFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUxSkgxVEJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxNzUxNTU4Nzo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqngSAgICAgICAgICDwnZOX8J2TkPCdk5rwnZOU8J2ToSAgICAgICAgIOqnglwiLFxuICAgIFwibGlkXCI6IFwiMTIzNzg5NTk3NzU3NDk3OjcyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puZms3Z0RFTzI2dDdZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibTkxckVwdksvSm5tdUpQaGhWVUlNQlF4blZRY1ZnZk1xeTFadS9MbVlBUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZNzlNOWI2MlhQNjdNR3dSSk1HQ2pjYnduNUVxaXpPazUraFpkNFF4bVM1U29CcEd0QlBTRGFZRE5wN0FJTXhXNjZwSUwyalBsSjFjOUlyYVZpQzVCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5VzgyL3NiNGsrVDRRanhnbkJnZllQenBWT3ZoOENqaS9PZW1TUzNPQ1c1R3NORGdWc0d2M1FzZW5rSGtkUElhaWxyZVBKQldzcmpHRHN0UGdMY01EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNzUxNTU4Nzo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ3Njc2MDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
