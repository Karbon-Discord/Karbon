const Discord = require('discord.js');
const fs = require('fs');
const help = JSON.parse(fs.readFileSync('./commands.txt', 'utf8'));
module.exports.run = async (bot, message, args) => {
   message.author.send(`${help}`)
};

module.exports.help = {
  name: "help"
}
