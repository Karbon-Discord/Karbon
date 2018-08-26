const Discord = require('discord.js');
const errors = require('./utils/errors.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
    
  let prefix = args[0];
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no no no.");
  if(!prefix || prefix == "help") return errors.correctUsage(message, "--prefix [prefix]");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  prefixes[message.guild] = {
      prefixes: args[0]
  }

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
      if(err) console.log(err);
  })

  message.channel.send("**:white_check_mark: | Successfully changed prefix!**")
}


module.exports.help = {
    name: "prefix"
}
