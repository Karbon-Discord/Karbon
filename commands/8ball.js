const Discord = require("discord.js");
const errors = require('./utils/errors.js');
module.exports.run = async (bot, message, args) => {

  message.react('🎱');
  const question = args.join(" ").slice(1);
  const res = [
      'Yes',
      "wtf? no",
      "maybe",
      "probably",
      "most likely not",
      "100%",
      "uh sure?",
      "ask a friend",
      "i cant answer right now"

  ]

  if (!question) {
      return errors.noQuestion(message);
  } else {
      var rand = Math.floor(Math.random() * res.length);
      message.channel.send(`${res[rand]}`);
  }
}

module.exports.help = {
  name: "8ball"
}
