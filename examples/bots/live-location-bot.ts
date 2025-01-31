import { Telegraf } from "telegraf";

export default async function main() {

	// @ts-ignore
	function sendLiveLocation(ctx) {
		let lat = 42.0;
		let lon = 42.0;
		// @ts-ignore
		ctx.replyWithLocation(lat, lon, { live_period: 60 }).then(message => {
			const timer = setInterval(() => {
				lat += Math.random() * 0.001;
				lon += Math.random() * 0.001;
				ctx.telegram
					.editMessageLiveLocation(lat, lon, message.chat.id, message.message_id)
					.catch(() => clearInterval(timer));
			}, 1000);
		});
	}

	const token = process.env.LIVE_LOCATION_BOT_TOKEN!;

	const bot = new Telegraf(token);
	bot.start(sendLiveLocation);
	bot.launch();

	console.log("Live location bot started");
}
