const Discord = require('discord.js');
const fetch = require('node-fetch');
const translate = process.env.translate;
module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("📚");
    var word = args[0]
    var language = args[1]
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translate}&text=${word}&lang=en-${language}`)
    .then(res => res.json())
    .then(data => {
        var embed = new Discord.RichEmbed()
        .setTitle("Translation")
        .addField(`English`, word)
        .addField(`Requested Translation`, data.text[0]);
        message.channel.send(embed);
    })
}

module.exports.help = {
  name: "translate"
}
