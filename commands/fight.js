const Discord = require('discord.js');
const wins = require('wins.json');
const losses = require('losses.json');
const xp = require('xp.json');

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first();
    if(user) return message.reply(`You have decided to fight ${user}. Is that correct?`);
    else return message.reply("Please specify a user.")
};

module.exports.help = {
  name: "fight"
}
