const Discord = require('discord.js');
const fetch = require('node-fetch');
const errors = require('./utils/errors.js')
const translate = process.env.translate;
module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("📚");
    var language = args[0]
    var phrase = args.join(" ").slice(2)
    if(!language || !phrase || !language && !phrase) return errors.correctUsage(message, "--translate [lang code] [phrase / word]")
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translate}&text=${phrase}&lang=en-${language}`)
    .then(res => res.json())
    .then(data => {
        var embed = new Discord.RichEmbed()
        .setTitle("Translation")
        .addField(`English`, phrase)
        .addField(`Requested Translation`, data.text[0]);
        message.channel.send(embed);
    })
}

module.exports.help = {
  name: "translate"
}
