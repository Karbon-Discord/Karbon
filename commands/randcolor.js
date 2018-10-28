const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  message.channel.send(new Discord.RichEmbed()
    .setTitle("Random Color")
    .setAuthor(message.author.tag)
    .setColor(color)
    .setDescription(`Random Color is: #${color}`)
  );
};
module.exports.help = {
  name: "randcolor"
};
