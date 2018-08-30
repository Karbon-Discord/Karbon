const Discord = require('discord.js');
const brain = require('brain.js');

module.exports.run = async (bot, message, args) => {
const network = new brain.recurrent.LSTM();
    network.train([
        { input: ["Warriors", "Thunder"], output: [0] },
        { input: ["Thunder", "Lakers"], output: [1] },
        { input: ["Cavaliers", "Wizards"], output: [1] },
        { input: ["Wizards", "Lakers"], output: [0] },
        { input: ["Warriors", "Raptors"], output: [0] },
    ])

    const output = network.run(["Warriors", "Lakers"]);

    console.log(`Category: ${output}`);
    
}

module.exports.help = {
  name: "ml"
}
