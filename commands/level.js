const Discord = require('discord.js');
const errors = require('./utils/errors.js');
const xp = require('../xp.json')
module.exports.run = async (bot, message, args) => {
    if(!xp[message.author.id]){
        xp[message.author.id] = {
            level:1,
            xp:0
        }
    }

    message.channel.send(`:white_check_mark: | **Your level is: ${xp[message.author.id].level}!`)

}

module.exports.help = {
    name: "level"
}
