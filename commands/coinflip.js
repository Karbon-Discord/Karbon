const Discord = require('discord.js');
const errors = require('./utils/errors.js')
module.exports.run = async (bot, message, args) => {
    var res = ['Heads', 'Tails']
   var diceVal = Math.floor(Math.random() * res.length);
    
   message.channel.send(`${res[diceVal]}.`);
};

module.exports.help = {
  name: "dice"
}