import 'dotenv/config';
import customContextBot from './bots/custom-context-bot.js';
import deeplinkBot from './bots/deeplink-bot.js';
import exampleBot from './bots/example-bot.js';
import inlineBot from './bots/inline-bot.js';
import keyboardBot from './bots/keyboard-bot.js';
import liveLocationBot from './bots/live-location-bot.js';
import mediaBot from './bots/media-bot.js';
import sessionBot from './bots/session-bot.js';
import echoBot from './bots/echo-bot.js';
import pollBot from './bots/poll-bot.js';

async function main() {
    await Promise.all([
        customContextBot(),
        deeplinkBot(),
        exampleBot(),
        inlineBot(),
        keyboardBot(),
        liveLocationBot(),
        mediaBot(),
        sessionBot(),
        echoBot(),
        pollBot()
    ]);
}
main();