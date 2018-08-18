const Discord = require('discord.js');
const fetch = require('node-fetch');
const translate = process.env.translate;
module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("📚");
    var word = args[0]
    var language = args[1]
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translate}&word=${word}&lang=${language}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

module.exports.help = {
  name: "define"
}
