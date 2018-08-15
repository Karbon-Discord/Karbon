const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.react("🆔");
    message.reply(`**Your Discord ID is: ${message.channel.id}**`)
}

module.exports.help = {
  name: "discordid"
}
