const Discord = require('discord.js');
const wins = require('../wins.json');
const losses = require('../losses.json');
const xp = require('../xp.json');

module.exports.run = async (bot, message, args) => {
    if(!wins[message.author.id]){
        wins[message.author.id] = {
            wins:0
        }
    }

    if(!losses[message.author.id]){
        losses[message.author.id] = {
            losses:0
        }
    }
    
        if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp:0,
            level:1
        }
    }
    
    
    let user = message.mentions.users.first();
    if(user) return message.channel.send(`${user}, ${message.author.username} has challenged you to fight. Would you like to accept the challenge?`)
    else return message.reply("Please specify a user.")
    var winnerHealth = Math.floor(Math.random * 99) + 1
    var loserHealth = 0;
    var arr = [`${message.author.id}`, `${user}`];
    var randomwinner = Math.floor(Math.random() * arr.length);
        var winner = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle(":crossed_swords: BATTLE [BETA]")
        .addField(`${randomwinner} has won the battle!`)
        .addField(`${winnerHealth} - 0`)
    message.channel.send()
    wins[message.author.id].wins = wins[message.author.id].wins += 1
   
}

module.exports.help = {
  name: "fight"
}
