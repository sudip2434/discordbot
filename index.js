const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NTQyNDg1MjY0OTQxOTczNTI0.Dz0QEg.ZWI89wI2Bbo35JJcsEl5SC-o1F4');

client.on('ready',() => {
    console.log('Logged in as ' + client.user.tag);
})

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
    if (msg.content === 'censor') {
        msg.reply('Sorry please no profanity in this server');
    }
    if (msg.content === 'testing') {
        msg.reply('testing complete, your bot is functional');
    }
});
