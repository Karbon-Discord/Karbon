const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {
  const phrase = args.join(' ');
  const network = new brain.recurrent.LSTM();
    network.train([
        { input: "Water", output: "Drink" },
        { input: "Juice", output: "Drink" },
        { input: "Lemonade", output: "Drink" },
        { input: "Coke", output: "Soda" },
        { input: "Sprite", output: "Soda" },
        { input: "Fanta", output: "Soda" },
        { input: "Pepsi", output: "Soda" },
        { input: "Mountain Dew", output: "Soda" }
    ])
    const output = network.run(parseString(phrase));
    message.reply(`Prob: ${output}`);
    if(output === "") return message.reply("**Looks like this word doesn't come under a drink or a soda!**")

}
module.exports.help = {
  name: "drink"
}
