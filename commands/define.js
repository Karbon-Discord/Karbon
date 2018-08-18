const Discord = require('discord.js');
const fetch = require('node-fetch');
const dictionary = process.env.dictionary;
module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("📚");
    var word = args[0]
    fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${dictionary}&lang=en-ru&text=${word}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

module.exports.help = {
  name: "define"
}
