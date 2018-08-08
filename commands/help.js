const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   let help = new Discord.RichEmbed()
   .setTitle("***EPIC KARBON COMMANDS***")
   .setColor("#bb00ff")
   .addField("--help", "Shows a list of commands", true)
   .addField("--dice [number]", "Roll a die :game_die:", true)
   .addField("--fight [user_in_discord]", "DEATH BATTLE :eyes: :crossed_swords:", true)
   .addField("--fortnite [username] [pc | psn | xbl ]", "My favorite food truck :fork_and_knife:", true)
   .addField("--win", "Shows the number of wins you got from fighting :trophy:", true)
   .addField("--frick", "ow", true)
   .addField("--yt", "Search for a video on YouTube", true)
   .addField("--lottery", "This is in beta", true)
   message.channel.send(help);
};

module.exports.help = {
  name: "help"
}
