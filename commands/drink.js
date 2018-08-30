const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {
  const phrase = args.join(' ');
  const network = new brain.recurrent.LSTM();
    network.train([
        { input: "Water", output: "Drink" },
        { input: "Juice", output: "Drink" },
        { input: "Lemonade", output: "Drink" },
         { input: "Coke", output: "Drink" },
        { input: "Sprite", output: "Drink" },
             { input: "Fanta", output: "Drink" },

    ])
  console.log(phrase);
    const output = network.run(`${phrase}`);
    message.reply(`Prob: ${output}`);
    if(output !== "Drink") return message.reply("**Looks like this word doesn't come under a drink or a soda!**")

}
module.exports.help = {
  name: "drink"
}
