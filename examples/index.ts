import 'dotenv/config';
import echoBot from './bots/echo-bot.js';
import pollBot from './bots/poll-bot.js';

async function main() {
    await Promise.all([
        echoBot(),
        pollBot()
    ]);
}
main();