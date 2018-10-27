const Discord = require("discord.js");
module.exports.run = async () => {
  var embed = new Discord.RichEmbed()
    .setDescription(`Random Color is: #${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`);
  message.channel.send(embed)
  );
};
module.exports.help = {
  name: "randcolor"
};
