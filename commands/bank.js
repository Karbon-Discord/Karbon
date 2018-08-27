const Discord = require('discord.js');
const katoms = require('../katoms.json');
const botconfig = require('../botconfig.json');
const bankacc = require('../katoms2.json');
const errors = require('./utils/errors.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
if (args[0] == "withdraw") {
  if(!katoms[message.author.id]){
  katoms[message.author.id] = {
    katoms:100
  }
  fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
}

if(!num) return errors.correctUsage(message, botconfig.prefix + "bank withdraw [num. katoms]");
else if(!bankacc[message.author.id]) return errors.noKatoms(message);
else{
  var lol = bankacc[message.author.id].katoms - parseInt(num);
  fs.writeFile('../katoms2.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  
  var oof = katoms[message.author.id].katoms + parseInt(num);
    fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  message.reply(`**Transfer Successful! You now have: ${oof} Katoms, and your alt bank account has ${lol} Katoms!**`)
}
}
else if (args[0] == "deposit") {
var num = args[1];
if(!bankacc[message.author.id]){
  bankacc[message.author.id] = {
    katoms:25
  }
  fs.writeFile('../katoms2.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
}

if(!num) return errors.correctUsage(message, botconfig.prefix + "bank deposit [num. katoms]");
else if(!katoms[message.author.id]) return errors.noKatoms(message);
  
  else if(!args[0]) return errors.correctUsage(message, botconfig.prefix + "bank [deposit | withdraw] [num. katoms]")
else{
  katoms[message.author.id].katoms -= num;
  fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  
  var oof = bankacc[message.author.id].katoms + parseInt(num);
    fs.writeFile('../katoms2.json', JSON.stringify(katoms), err => {
    if(err) console.log(err);
  })
  message.reply(`**Transfer Successful! You now have: ${katoms[message.author.id].katoms} Katoms, and your alt bank account has ${oof} Katoms!**`)
}
}
else {message.reply("Possible options: deposit, withdraw");}
}
module.exports.help = {
  name: "bank"
}
