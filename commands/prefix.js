const Discord = require('discord.js');
const errors = require('./utils/errors.js');
const botconfig = require('../config.json')
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
    
  let prefix = args[0];
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("no no no");
  if(!prefix || prefix == "help") return errors.correctUsage(message, "--prefix [prefix]");

  let prefixes = JSON.parse(fs.readFileSync("../prefixes.json"));
  
  prefixes[message.guild.id] = {
      prefixes:prefix
  }

  fs.writeFile("../prefixes.json", JSON.stringify(prefixes), err => {
      if(err) console.log(err);
  })
}


module.exports.help = {
    name: "prefix"
}
