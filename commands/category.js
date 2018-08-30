const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const brain = require('brain.js');
    const data = require('../data.json');

    const network = new brain.recurrent.LSTM();

    const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
    }));

    network.train(trainingData, {
    iterations: 3000
    });

    const output = network.run('juice');

    console.log(`Category: ${output}`);
}

module.exports.help = {
  name: "category"
}
