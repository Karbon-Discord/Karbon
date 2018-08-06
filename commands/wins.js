const Discord = require('discord.js');
const wins = require('../wins.json');

module.exports.run = async (bot, message, args) => {
  var win = wins[message.author.id].wins;
  message.reply(`You have ${win} wins.`)

};

module.exports.help = {
  name: "wins"
}
