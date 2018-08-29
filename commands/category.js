const Discord = require('discord.js');
const brain = require('brain.js');
//const data = require('./data.json');
const errors = require('./utils/errors.js')
module.exports.run = async (bot, message, args) => {
   // var user = args.join(' ');
    //if(!user) return errors.correctUsage(message, "--category [word or phrase]")
    
    var net = new brain.recurrent.LSTM();

    net.train([
      'doe, a deer, a female deer',
      'ray, a drop of golden sun',
      'me, a name I call myself',
    ]);
    
    var output = net.run('doe');  // ', a deer, a female deer'
    console.log(output);


};

module.exports.help = {
  name: "category"
}
