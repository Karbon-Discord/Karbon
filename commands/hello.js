const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   message.channel.send("Hey there!")
};

module.exports.help = {
  name: "hello"
}
