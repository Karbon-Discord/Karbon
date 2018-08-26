const Discord = require('discord.js');
const fetch = require('node-fetch')
module.exports.run = async (bot, message, args) => {
    var sentence =  args[0]
    fetch(`https://elementz.neocities.org/${sentence}.txt`)
    .then(res => res.text())
    .then(data => {
        let factEmbed = new Discord.RichEmbed()
        .setTitle(`**ELEMENT FACT FOR ATOMIC NUMBER ${sentence}**`)
        .addField("Fact", data);
        message.channel.send(factEmbed)
    })

}

module.exports.help = {
  name: "elementz"
}