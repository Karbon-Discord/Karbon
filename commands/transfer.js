const Discord = require('discord.js');
const katoms = require('../katoms.json');
const bankacc = require('../katoms2.json');
const errors = require('./utils/errors.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
var num = args[0];
if(!bankacc[message.author.id]){
  bankacc[message.author.id] = {
    katoms:25
  }
  fs.writeFile('../katoms2.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
}

if(!num) return errors.correctUsage(message, "--transfer [num. katoms]");
else if(!katoms[message.author.id]) return errors.noKatoms(message);
else{
  katoms[message.author.id].katoms -= num;
  fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  
  var oof = bankacc[message.author.id].katoms;
  
  console.log(oof + parseInt(num))
  fs.writeFile('../katoms2.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  message.reply(`**Transfer Successful! You now have: ${katoms[message.author.id].katoms} Katoms, and your alt bank account has ${bankacc[message.author.id].katoms} Katoms!**`)
}
}
module.exports.help = {
  name: "transfer"
}
