const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports.run = async (bot, message, args) => {
  
    fetch(`http://artii.herokuapp.com/make?text=${args.join(' ').slice(1)}`)
    .then(res => res.text)
    .then(data => {
        return message.channel.send(```
        ${data}
        ```)
    })    

}

module.exports.help = {
  name: "ascii"
}
