const Discord = require("discord.js");
const config = require('./botconfig.json');

const bot = new Discord.Client({disableEveryone:true});
bot.on("message", (message) => {
    let prefix = config.prefix;
      
})

bot.login(config.token);