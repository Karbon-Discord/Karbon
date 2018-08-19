const Discord = require('discord.js');
const help = require('./commands.txt');
module.exports.run = async (bot, message, args) => {
   message.author.send(`${help}`)
};

module.exports.help = {
  name: "help"
}
