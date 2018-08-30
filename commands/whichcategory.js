const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {

  const phrase = args.join(' ');
    message.channel.send("**THINKING** Please note this will take up to 2-3 minutes.")
  const network = new brain.recurrent.LSTM();
    network.train([
        { input: "Water", output: "Drink" },
        { input: "Juice", output: "Drink" },
        { input: "Lemonade", output: "Drink" },
         { input: "Coke", output: "Drink" },
        { input: "Sprite", output: "Drink" },
         { input: "Fanta", output: "Drink" },
        { input: "Los Angeles", output: "Place" },
        { input: "San Francisco", output: "Place" },
           { input: "Portland", output: "Place" },
           { input: "Toronto", output: "Place" },
           { input: "Boston", output: "Place" },
           { input: "New Delhi", output: "Place" },
           { input: "Lahore", output: "Place" },
           { input: "Seoul", output: "Place" },
         { input: "0", output: "Number" },
           { input: "1", output: "Number" },
                 { input: "2", output: "Number" },
                 { input: "3", output: "Number" },
                 { input: "4", output: "Number" },
                 { input: "5", output: "Number" },
                 { input: "6", output: "Number" },
                 { input: "7", output: "Number" },
                 { input: "8", output: "Number" },
                 { input: "9", output: "Number" },

    ])
  console.log(phrase);
    const output = network.run(`${phrase}`);
    message.reply(`Prob: ${output}`);
    if(output !== "Drink" || output !== "Place" output !== "Number") return message.reply("**Looks like this word doesn't come under a drink or a soda!**")

}
module.exports.help = {
  name: "drink"
}
