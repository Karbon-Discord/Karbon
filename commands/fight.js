const Discord = require('discord.js');
const wins = require('../wins.json');
const losses = require('../losses.json');
const xp = require('../xp.json');

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first();
    if(user) return message.channel.send(`@${user}, ${message.author.username} has challenged you to fight. Would you like to accept the challenge?`)
    .then(() => {
        message.channel.awaitMessages(response => response.content == "yes" && message.author.id == user || response.content == "no" && message.author.id == user, {
            max:1,
            time:40000,
            errors: ['time'],
        })
           .then((collected) => {
                if (collected.first().content == 'yes') {
                    message.channel.send(`${user} has accepted the challenge!`);
                }
                else if(collected.first().content == 'no') {
                    message.channel.send(`Alright, so ${user} is scared. But oh well, challenge declined!`);
                }
            })
    })
    else return message.reply("Please specify a user.")
};

module.exports.help = {
  name: "fight"
}
