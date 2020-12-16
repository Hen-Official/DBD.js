# Join For More Information
[Join In My Server For More Wiki!](https://discord.gg/CztqnJZrZ9)

[View Leref DBD.js](http://github.com/Leref/DBD.js/)

[DBD.js Server](https://discord.gg/gJweMB9YJ2)

[DanBot Hosting](https://discord.gg/6vpM3BMzVm)

# Getting Started
Went You Using DBD.js, You Have Website Or Server That Runs To Your Bot!
Like [DanBot Hosting](http://panel.DanBot.hosting/), [Repl.it](http://repl.it), [Glitch](http://glitch.com/)

**This Are Need To Run Your Server**

__Copyright Of Leref__

**Open your Terminal or whatever you have, and use the following**
`npm install dbd.js`

Add New File Named `server.js`

```
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
```

**Make Sure You Added Token Of The Bot!**

Next, Add New File, Named `package.json`
Paste It To The `package.json`

```
{
    "name": "-asdf",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
      "start": "node server.js"
    },
    "engines": {
      "node": "12.x"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "dbd.js": "^1.0.0"
    }
  }
```

Make Sure You Are Updated The Version Of dbd.js
You Can Join On The DBD.js Official Server To Update Your Bot!
[DBD.js Discord Server](https://discord.gg/gJweMB9YJ2)

# Command Handler
Note : **Edit The `server.js` To Do This Command Handler** You Need To Change It Then Paste The Token Of The Bot, Then Change The Prefix

```
const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN", 
prefix: "!" 
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}
```
Steps To Make Command Handler Setup
Step #1 : Create a folder named "commands"
Step #2 : Make a subfolder
Step #3 : Finally, make your file

For More Information Please go to [Website](https://dbd.leref.ga/guide/begin/)
