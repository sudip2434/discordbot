const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NTQyNDg1MjY0OTQxOTczNTI0.Dzuu3g.LD6qlB9Iku46FIjyxW8MXISjtdQ');

client.on('ready',() => {
    console.log('Logged in as ' + client.user.tag);
})

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
    if (msg.content === 'censor') {
        msg.reply('pSorry please no profanity in this server');
    }
});