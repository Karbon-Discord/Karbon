const Discord = require('discord.js');
const brain = require('brain.js');
const data = require('./brain.json');
const errors = require('./utils/errors.js')

module.exports.run = async (bot, message, args) => {

 var obj = args.join(' ');
 if(!obj) return errors.correctUsage(message, "--category [word | phrase]");

 const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 3000
});

const res = network.run(obj);

console.log(`Category: ${res}`);
};

module.exports.help = {
  name: "category"
}


