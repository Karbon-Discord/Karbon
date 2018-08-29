const Discord = require('discord.js');
const brain = require('brain.js');
const data = require('./data.json');
const errors = require('./utils/errors.js')
module.exports.run = async (bot, message, args) => {
    var user = args.join(' ');
    if(!user) return errors.correctUsage(message, "--category [word or phrase]")
    
    const network = new brain.recurrent.LSTM();

    const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
    }));

    network.train(trainingData, {
    iterations: 3000
    });

    const output = network.run('water').then(() => {
        console.log(`Category: ${output}`);

    }).catch(() => {
        if(err) console.log(err)
    })



};

module.exports.help = {
  name: "category"
}
