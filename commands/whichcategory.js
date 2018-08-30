const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send("**THINKING** Please note this will take some time.")

  const phrase = args.join(' ');
    console.log(phrase);

  const network = new brain.recurrent.LSTM();
 network.train([
        { input: "Water", output: "Drink" },
        { input: "Juice", output: "Drink" },
        { input: "Lemonade", output: "Drink" },
         { input: "Coke", output: "Drink" },

        { input: "Los Angeles", output: "Place" },
           { input: "New Delhi", output: "Place" },
           { input: "Lahore", output: "Place" },
           { input: "Seoul", output: "Place" },
         { input: "0", output: "Number" },
           { input: "1", output: "Number" },
                 { input: "2", output: "Number" },
                 { input: "3", output: "Number" },

    ])

    const output = network.run(`${phrase}`);
    message.reply(`Prob: ${output}`);
    if(output !== "Drink" || output !== "Place" || output !== "Number") return message.reply("**Looks like this word doesn't come under a drink or a soda!**")

}
module.exports.help = {
  name: "whichcategory"
}
