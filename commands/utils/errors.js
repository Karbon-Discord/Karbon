const Discord = require('discord.js');
const fs = require('fs');

module.exports.correctUsage = (message, usage) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("**INCORRECT USAGE**")
  .setColor("#f48c42")
  .addField("Correct Usage", usage);
  message.channel.send(embed);
}
