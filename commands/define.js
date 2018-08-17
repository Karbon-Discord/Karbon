const Discord = require('discord-js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
    console.log("Fetch ready!");
    message.react("📚");
    var word = args[0]
    fetch(`https://wordsapiv1.p.mashape.com/words/${word}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

module.exports.help = {
  name: "define"
}
