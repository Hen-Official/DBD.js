const dbd = require("dbd.js")

const bot = new dbd.Bot({
token: "TOKEN", 
prefix: "!" 
})

bot.onMessage()

bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})
// This Is Not Command Handler So, You Can Write Here Of You Want! //
