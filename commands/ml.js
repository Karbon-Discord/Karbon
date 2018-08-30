const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {
  const network = new brain.recurrent.LSTM();
    network.train([
        { input: "Water", output: "Drink" },
        { input: "Juice", output: "Drink" },
        { input: "Lemonade", output: "Drink" }
    ])
    const output = network.run("Mango Juice");
    message.reply(`Prob: ${output}`);

}
module.exports.help = {
  name: "ml"
}
