const Discord = require("discord.js");
const config = require('./botconfig.json');
const token = process.env.token;
const bot = new Discord.Client({disableEveryone:true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0) console.log("Couldn't find the command!");

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);

    })

})
bot.on('ready', () => {
    bot.user.setActivity(`in ${bot.guilds.size} servers`)
})
bot.on('guildMemberAdd', member => {
    member.channels.find("478309556330430464").send(`**Welcome aboard, ${member.user}! Please welcome him/her! If you have any questions, feel free to DM one of the Developers or me!** `);
    let embed = new Discord.RichEmbed()
    .setColor("#42f47d")
    .addField(`**${member.user.username} has joined the server.`)
    .addField(`${member.user.displayAvatarURL} User Joined`);
    member.guild.channels.find("478309556330430464").send(embed);
});

// bot.on('guildMemberRemove', member => {
//   //  bot.defaultChannel.send(`${member.user.username} has abandoned ship. :slight_frown:`);
// });

bot.on("message", (message) => {
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
     
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
    
 
})

bot.login(process.env.token);
