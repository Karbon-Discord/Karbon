const Discord = require('discord.js');
const wins = require('../wins.json');

module.exports.run = async (bot, message, args) => {
  var wins = wins[message.author.id].wins;
  message.reply(`You have ${wins} wins.`)
  console.log(wins)
};

module.exports.help = {
  name: "wins"
}
