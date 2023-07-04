/* eslint-disable @typescript-eslint/no-floating-promises */
import { Context, Telegraf, Telegram } from 'telegraf'
import { Update, UserFromGetMe } from 'typegram'

export default async function main() {
  const token = process.env.CUSTOM_CONTEXT_BOT_TOKEN
  if (token === undefined) {
    throw new Error('CUSTOM_CONTEXT_BOT_TOKEN must be provided!')
  }

  class CustomContext extends Context {
    constructor(update: Update, telegram: Telegram, botInfo: UserFromGetMe) {
      console.log('Creating context for %j', update)
      super(update, telegram, botInfo)
    }

    reply(...args: Parameters<Context['reply']>) {
      console.log('reply called with args: %j', args)
      return super.reply(...args)
    }
  }

  const bot = new Telegraf(token, { contextType: CustomContext })
  bot.start((ctx) => ctx.reply('Hello'))
  bot.help((ctx) => ctx.reply('Help message'))
  bot.launch()

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))

 
	console.log("Echo bot started");
}
