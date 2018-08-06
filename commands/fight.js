const Discord = require('discord.js');
const wins = require('../wins.json');
const xp = require('../xp.json');

module.exports.run = async (bot, message, args) => {
    if(!wins[message.author.id]){
        wins[message.author.id] = {
            wins:0
        }
    }
    
        if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp:0,
            level:1
        }
    }
    
    
    let user = message.mentions.users.first();
    if(!user) message.reply("Please specify a user.")
    var winnerHealth = Math.floor(Math.random() * 99) + 1
    var loserHealth = 0;
    var arr = [`${message.author.username}`, `${user.username}`];
    var randomwinner = Math.floor(Math.random() * arr.length);
        var winner = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle(":crossed_swords: BATTLE [BETA]")
        .addField(`${arr[randomwinner]} has won the battle!`)
        .addField(`${winnerHealth} - 0`)
    message.channel.send(winner)
    wins[message.author.id].wins = wins[message.author.id].wins += 1
    xp[message.author.id].xp = xp[message.author.id].xp += 1
}

module.exports.help = {
  name: "fight"
}
