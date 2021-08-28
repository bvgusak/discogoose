import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
});

const token = process.env.TOKEN;

client.login(token);

client.on('messageCreate', (msg) => {
    const mgsLowerCase = msg.content.toLocaleLowerCase();

    if (mgsLowerCase === 'honk') {
        msg.reply('Honk!');
    }
});
