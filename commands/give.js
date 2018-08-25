const Discord = require('discord.js');
const katoms = require('../katoms.json');
const errors = require('./utils/errors.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
    var num = args[0];
    var pers = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!katoms[message.author.id]){
        return errors.noKatoms(message);
    }

    if(!katoms[pers.id]){
        katoms[pers.id] = {
            katoms:100
        }
    }

    let pCoins = katoms[pers.id].katoms;
    let uCoins = katoms[message.author.id].katoms;
    if(uCoins < num) return message.reply(":x: | Not enough Katoms!**");
    katoms[message.author.id].katoms = katoms[message.author.id].katoms - parseInt(num);
    katoms[pers.id].katoms = katoms[pers.id].katoms + parseInt(num);
}
module.exports.help = {
  name: "transferback"
}