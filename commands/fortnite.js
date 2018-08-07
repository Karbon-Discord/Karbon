const Discord = require('discord.js');
const client = require('fortnite');
const fortnite = new client(process.env.fortnite);

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
          let mp = lifetime[7]["Matches Played"];
          let wins = lifetime[8]["Wins"];  
          let winper = lifetime[9]["Win%"];
          let kills = lifetime[10]["Kills"];
          let kd = lifetime[11]["K/d"];

          let embed = new Discord.RichEmbed()
          .setTitle("**FORTNITE LIFETIME STATS**")
          .setAuthor(message.author.username)
          .setColor("#000000")
          .addField("Wins", wins, true)
          .addField("Matches Played", mp, true)
          .addField("Score", score, true)
          .addField("Win Percentage", winper, true)
          .addField("Kills", kills, true)
          .addField("KD", kd, true);
           message.channel.send(embed);
          console.log(score)
      }).catch(err => {
      if(err) {console.log(err)}
      })
 };

module.exports.help = {
  name: "fortnite"
}
