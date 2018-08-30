const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {
const network = new brain.NeuralNetwork();
    network.train([
        { input: [0, 0, 0], output: [1] },
        { input: [0, 1, 1], output: [1] },
        { input: [1, 0, 1], output: [1] }
    ])
    const output = network.run([1, 0, 1]);
    console.log(`Prob: ${output}`);

}
module.exports.help = {
  name: "ml"
}
