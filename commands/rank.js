const Discord = require('discord.js');
const xp = require('../xp.json')
const errors = require('./utils/errors.js')
module.exports.run = async (bot, message, args) => {
 var arr = [];
 arr.push(xp);
 console.log(arr);
    
};

module.exports.help = {
  name: "rank"
}
