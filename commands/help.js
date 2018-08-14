const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   message.channel.type = "dm";
   message.channel.send("oof")
};

module.exports.help = {
  name: "help"
}
