const Discord = require('discord.js');
const katoms = require('../katoms.json');
const bankacc = require('../katoms2.json');
const errors = require('./utils/errors.js');

module.exports.run = async (bot, message, args) => {
var num = args[0];
if(!bankacc[message.author.id]){
  bankacc[message.author.id] = {
    katoms:25
  }
}

if(!num) return errors.correctUsage(message, "--transfer [num. katoms]");
else if(!katoms[message.author.id]) return errors.noKatoms(message);
else{
  katoms[message.author.id].katoms = katoms[message.author.id].katoms -= num;
  bankacc[message.author.id].bankacc = bankacc[message.author.id].bankacc += num;
  message.reply("**Transfer Successful!**")
}
}
module.exports.help = {
  name: "transfer"
}
