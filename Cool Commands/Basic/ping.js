// For Command Handler //
module.exports = ({
    name: "ping",
    code: `
**Pong!**
Current Ping : `\$pingms`\
Current Shard ID : `\$shardID\`
$editIn[3s;
**Pong!**
Edited Ping : `\$pingms\`
Edited Shard ID : `\$shardID\`
]
`
});
// For "server.js" File Command //
bot.command({
name: "ping",
code: `
**Pong!**
Current Ping : `\$pingms`\
Current Shard ID : `\$shardID\`
$editIn[3s;
**Pong!**
Edited Ping : `\$pingms\`
Edited Shard ID : `\$shardID\`
]
`
});
// Copyright By Hen //
