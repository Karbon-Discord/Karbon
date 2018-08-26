const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async (bot, message, args) => {
    args.slice()
    figlet(args.join(" "), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        message.channel.send("```" + data + "```");
    });

}

module.exports.help = {
  name: "figlet"
}
