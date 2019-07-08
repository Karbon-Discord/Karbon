const Discord = require('discord.js');
const errors = require('./utils/errors.js')
const tf = require('@tensorflow/tfjs')
module.exports.run = async (bot, message, args) => {
    let minTemp = args[0]
    if(!minTemp) return errors.correctUsage(message, "--temppred [minimum temperature]");
    else{
         const model = await tf.loadLayersModel("https://elementzprojects.github.io/Work/Neural%20Networks/Temperature%20Predictor/model.json")
         let pred = model.predict(tf.tensor2d([parseInt(minTemp)], [1, 1]))
         message.channel.send(`The Predicted Maximum Temperature is: ${parseInt(pred.dataSync()[0])}°F`)
    }
}


module.exports.help = {
    name: "temppred"
}
