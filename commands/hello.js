const Discord = require('discord.js');

module.exports.run(bot, message, args) => {
   message.channel.send("Hey there!")
};

module.exports.help = {
  name: "hello"
}
