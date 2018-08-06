const Discord = require('discord.js');
const wins = require('../wins.json');

module.exports.run = async (bot, message, args) => {
  var win12 = wins[message.author.id].wins;
  message.channel.send(`You have ${win12} wins.`)

};

module.exports.help = {
  name: "win"
}
