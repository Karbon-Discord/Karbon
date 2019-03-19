const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (args[0]) {
      message.channel.send(args[0]);
    }
    else {
      message.react("🆔");
      message.reply(`**Your Discord ID is: ${message.author.id}**`);
    }
}

module.exports.help = {
  name: "discordid"
};