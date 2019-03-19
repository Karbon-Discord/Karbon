const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.react("🆔");
    if (args[0]) {
      message.channel.send(`**Discord ID of that user: ${message.mentions.members.first().id}**`);
    }
    else {
      message.reply(`**Your Discord ID is: ${message.author.id}**`);
    }
}

module.exports.help = {
  name: "discordid"
};