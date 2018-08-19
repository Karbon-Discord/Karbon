const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   var diceVal = Math.floor(Math.random() * args[0]);
   if(!args[0]){
    diceVal = Math.floor(Math.random() * 6) + 1;
   }
    
   message.channel.send(`The dice value outputted ${diceVal}.`);
};

module.exports.help = {
  name: "dice"
}
