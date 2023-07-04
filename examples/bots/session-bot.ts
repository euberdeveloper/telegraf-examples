import { Context, session, Telegraf } from "telegraf";

export default async function main() {

	interface SessionData {
		messageCount: number;
		// ... more session data go here
	}

	// Define your own context type
	interface MyContext extends Context {
		session?: SessionData;
		// ... more props go here
	}

	if (process.env.SESSION_BOT_TOKEN === undefined) {
		throw new TypeError("SESSION_BOT_TOKEN must be provided!");
	}

	// Create your bot and tell it about your context type
	const bot = new Telegraf<MyContext>(process.env.SESSION_BOT_TOKEN);

	// Make session data available
	bot.use(session());

	// Register middleware
	bot.on("message", async ctx => {
		// set a default value
		ctx.session ??= { messageCount: 0 };
		ctx.session.messageCount++;
		await ctx.reply(`Seen ${ctx.session.messageCount} messages.`);
	});

	// Launch bot
	// eslint-disable-next-line @typescript-eslint/no-floating-promises
	bot.launch();

	console.log("Session bot started");

}