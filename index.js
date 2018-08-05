const Discord = require("discord.js");
const config = require('./botconfig.json');
const token = process.env.token;
const bot = new Discord.Client({disableEveryone:true});
bot.on("message", (message) => {
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(cmd === `${prefix}hello`){
        message.channel.send("Hey there!")
    }
      
})

bot.login(process.env.token);
