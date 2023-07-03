import { Console } from "console";
import { Telegraf, Markup } from "telegraf";

export default async function main() {
	const { ECHO_BOT_TOKEN } = process.env;
	if (!ECHO_BOT_TOKEN) throw new Error('"ECHO_BOT_TOKEN" env var is required!');
	const bot = new Telegraf(ECHO_BOT_TOKEN);
	
	const keyboard = Markup.inlineKeyboard([
		Markup.button.url("❤️", "http://telegraf.js.org"),
		Markup.button.callback("Delete", "delete"),
	]);
	
	bot.start(ctx => ctx.reply("Hello"));
	bot.help(ctx => ctx.reply("Help message"));
	bot.on("message", ctx => ctx.copyMessage(ctx.message.chat.id, keyboard));
	bot.action("delete", ctx => ctx.deleteMessage());
	
	bot.launch();
	console.log("Echo bot started");
}

