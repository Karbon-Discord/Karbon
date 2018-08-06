const Discord = require("discord.js");
let wins = require("../wins.json");

module.exports.run = async (bot, message, args) => {

  if(!wins[message.author.id]){
   wins[message.author.id] = {
     wins: 0
  };
}
  let curxp = wins[message.author.id].wins;
  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#000000")
  .addField("Wins", curxp, true);
  message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "win"
}
