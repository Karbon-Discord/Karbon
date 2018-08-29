const Discord = require('discord.js');
const brain = require('brain.js');
const data = require('../brain.json');
const errors = require('./utils/errors.js')

module.exports.run = async (bot, message, args) => {

 var obj = args.join(' ');
 if(!obj) return errors.correctUsage(message, "--category [word | phrase]");

 try{
 message.channel.send("Thinking... NOTE: This will take a while for me to think."); 

 const network = new brain.recurrent.LSTM();

 const trainingData = data.map(item => ({
   input: item.text,
   output: item.category
 }));

network.train(trainingData, {
   iterations: 3000
 });

 const output = network.run(`${obj}`);

 message.reply(`**According to my virtual brain, the category for the phrase/word is: ${output}**`);

 } catch(e){
     if(e) console.log(e)
 }
};

module.exports.help = {
  name: "category"
}


