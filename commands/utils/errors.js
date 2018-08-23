const Discord = require('discord.js');
const fs = require('fs');
const config = require('../../botconfig.json');
module.exports.correctUsage = (message, usage) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("**INCORRECT USAGE**")
  .setColor(config.orange)
  .addField("Correct Usage", usage);
  message.channel.send(embed);
}

module.exports.noKatoms = (message) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("**YOU DO NOT HAVE A KATOMS DB**")
  .setColor(config.orange)
  .addField("Run this command", "--createkatoms");
  message.channel.send(embed);
}

module.exports.noPerms = (message, perm) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("**NO PERMS**")
  .setColor(config.red)
  .addField("Insufficent Perm", perm);
  message.channel.send(embed);
}

module.exports.userNotFound = (message) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("*USER NOT FOUND**")
  .setColor(config.blue)
  .addField("Error", "You did not specify a user!");
  message.channel.send(embed);
}
