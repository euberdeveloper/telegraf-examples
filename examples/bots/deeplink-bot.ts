// https://core.telegram.org/bots#deep-linking
import { Telegraf } from "telegraf";

export default async function main() {

    const { DEEP_LINK_BOT_TOKEN } = process.env;
    if (!DEEP_LINK_BOT_TOKEN) throw new Error('"DEEP_LINK_BOT_TOKEN" env var is required!');
    const bot = new Telegraf(DEEP_LINK_BOT_TOKEN);

    bot.start(ctx => ctx.reply(`Deep link payload: ${ctx.startPayload}`));

    bot.launch();

    console.log("Deep link bot started");
}
