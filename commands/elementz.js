const Discord = require('discord.js');
const fetch = require('node-fetch')
module.exports.run = async (bot, message, args) => {
    var sentence =  args[0]
    fetch(`https://elementz.neocities.org/${sentence}.txt`)
    .then(res => res.text())
    .then(data => {
        console.log(data);
    })

}

module.exports.help = {
  name: "elementz"
}