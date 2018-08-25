const Discord = require('discord.js');
const katoms = require('../katoms.json');
const errors = require('./utils/errors.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
    if(!message.author.hasPermission("ADMINISTRATOR")) return message.reply("no");
    var num = args[0];
    var pers = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
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
    katoms[pers.id].katoms = katoms[pers.id].katoms + parseInt(num);
    message.reply(`Successfully gave ${pers} ${num} Katoms!`)
}
module.exports.help = {
  name: "give"
}