import 'dotenv/config';
import customContextBot from './bots/custom-context-bot.js';
import deeplinkBot from './bots/deeplink-bot.js';
import exampleBot from './bots/example-bot.js';
import echoBot from './bots/echo-bot.js';
import pollBot from './bots/poll-bot.js';

async function main() {
    await Promise.all([
        customContextBot(),
        deeplinkBot(),
        exampleBot(),
        echoBot(),
        pollBot()
    ]);
}
main();