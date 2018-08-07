const Discord = require('discord.js');
const fortnite = process.env.fortnite;
const client = require('fortnite');

module.exports.run = async (bot, message, args) => {
      var username = args[0];
      var platform = args[1] || "pc";
      if(!username) return message.reply("Please enter a username.")
      
      let data = fortnite.user(username, platform)
      .then(data => {
          console.log(data);
          let stats = data.stats;
          let lifetime = stats.lifetime;
          let score = lifetime[6]["Score"];
          console.log(score)
      })
 };

module.exports.help = {
  name: "fortnite"
}
