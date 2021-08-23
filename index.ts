// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

const token = process.env.TOKEN;

// Login to Discord with your client's token
client.login(token);

client.on('messageCreate', (msg) => {
    const mgsLowerCase = msg.content.toLocaleLowerCase();

    if (mgsLowerCase === 'honk') {
        msg.reply('Honk!');
    }
});
