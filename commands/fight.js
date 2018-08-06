const Discord = require('discord.js');
const wins = require('../wins.json');
const losses = require('../losses.json');
const xp = require('../xp.json');

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first();
    if(user) return message.channel.send(`${user}, ${message.author.username} has challenged you to fight. Would you like to accept the challenge?`)
    else return message.reply("Please specify a user.")
    
    var res = ["yes", "no"];
    if(user.reply == "yes") console.log("oof");
          
};

module.exports.help = {
  name: "fight"
}
