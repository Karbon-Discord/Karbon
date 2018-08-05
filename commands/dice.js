const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   var diceVal = Math.floor(Math.random() * args[1]);
   message.channel.send(`The dice output ${diceVal}`);
};

module.exports.help = {
  name: "dice"
}
