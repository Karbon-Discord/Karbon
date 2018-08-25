const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports.run = async (bot, message, args) => {
    var sentence =  args.join(' ').slice(1)
    fetch(`https://textart.io/figlet?text=${sentence}`)
    .then(res => res.text)
    .then(data => {
        return message.channel.send(`${data}`)
    })    

}

module.exports.help = {
  name: "ascii"
}
