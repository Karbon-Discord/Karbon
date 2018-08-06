const Discord = require('discord.js');
const wins = require('../wins.json');
const losses = require('../losses.json');
const xp = require('../xp.json');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    let author1 = message.author.username;
    let user = message.mentions.users.first();
    if(!user) return message.reply("you did not specify who you would like to fight!");

    //checks if the users is trying to fight themselves
    if(user.id == message.author.id) return message.reply('you cannot fight yourself!');

    //checks if the user is trying to fight the bot
    if(user.bot ==  true)
        return message.reply('you cannot fight a bot!');

    //saves the two user ids to variables
    var fighter1 = message.author.id;
    var fighter2 = user.id;

    //announces challenge and awaits response
    var challenged = user.toString();
    message.channel.send(`${challenged}, ${author1} has challenged you to a duel. Do you accept the challenge, yes or no?`)
        .then(() => {
            message.channel.awaitMessages(response => response.content == 'yes' && message.author.id == fighter2 || response.content == 'no' && message.author.id == fighter2, {
                max: 1,
                time: 60000,
                errors: ['time'],
            })
            .then((collected) => {
                if (collected.first().content == 'yes') {
                    message.channel.send(`${challenged} has accepted the challenge!`);
                }
                else if(collected.first().content == 'no') {
                    message.channel.send(`nope`);
                }
            })
            .catch(() => {
                message.channel.send(`No response. Fight has been cancelled.`);
            });
        });       
}
   


module.exports.help = {
  name: "fight"
}


