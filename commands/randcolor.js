const Discord = require("discord.js");
module.exports.run = async () => {
  message.channel.send(new Discord.RichEmbed()
    .setDescription(`Random Color is: #${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`)
  );
};
module.exports.help = {
  name: "randcolor"
};