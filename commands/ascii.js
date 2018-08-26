const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async (bot, message, args) => {
    var sentence =  args.join(' ').slice(1)
 
    figlet(`${sentence}`, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        message.channel.send(`${data}`)
    });

}

module.exports.help = {
  name: "figlet"
}
