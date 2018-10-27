const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  var embed = new Discord.RichEmbed()
    .setTitle("Random Color")
    .setAuthor(message.author.tag)
    .setColor(`${color}`)
    .setDescription(`Random Color is: #${color)}`);
  message.channel.send(embed)
};
module.exports.help = {
  name: "randcolor"
};
