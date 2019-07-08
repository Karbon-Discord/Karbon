const Discord = require('discord.js');
const model = require('./tfmodels/temperaturemodel/model.json')
const errors = require('./utils/errors.js')
const tf = require('@tensorflow/tfjs')
module.exports.run = async (bot, message, args) => {
    let minTemp = args[0]
    if(!minTemp) return errors.correctUsage(message, "--temppred [minimum temperature]");
    else{
         const model = await tf.loadLayersModel(model)
         let pred = model.predict(tf.tensor2d([parseInt(minTemp)], [1, 1]))
         message.channel.send(`The Predicted Maximum Temperature is: ${pred.dataSync()[0]}°F`)
    }
}


module.exports.help = {
    name: "temppred"
}
