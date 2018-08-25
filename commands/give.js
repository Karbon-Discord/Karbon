const Discord = require('discord.js');
const katoms = require('../katoms.json');
const errors = require('./utils/errors.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("no");
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var num = args[1];

    if(!katoms[user.id]){
        katoms[user.id] = {
            katoms:100
        }
        fs.writeFile('../katoms.json', JSON.stringify(katoms), err => {
            if(err) console.log(err);
        })
    }

    let pCoins = katoms[user.id].katoms;
    katoms[user.id] = {
        katoms: pCoins + parseInt(num)
    }


    message.reply(`Successfully gave ${pers} ${num} Katoms!`)
}
module.exports.help = {
  name: "give"
}