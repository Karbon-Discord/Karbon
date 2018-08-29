const Discord = require('discord.js');
const errors = require('./utils/errors.js');
const config = require('../botconfig.json')
module.exports.run = async (bot, message, args) => {
    let conv = args[0];
    let un = args[1];

    if(!conv || !un) return errors.correctUsage(message, `${config.prefix}height [fti | itf] [number]`);
    if(conv === "fti"){
        var conversion = parseInt(un) * 12
        message.channel.send(`:white_check_mark: | ** NUMBER OF INCHES: ${conversion} inches**`)
    }
    if(conv === "itf"){
        var conversion = parseInt(un) / 12
        message.channel.send(`:white_check_mark: | ** NUMBER OF FEET: ${conversion} feet**`)
    }
}