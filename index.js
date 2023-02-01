const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const text = require("./const");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  ctx.reply(
    `Привет ${
      ctx.message.from.first_name ? ctx.message.from.first_name : "Незнакомец"
    }, что бы посмотреть все команды бота, напиши /help! 🥰`
  )
);
bot.help((ctx) => ctx.reply(text.commands));

bot.command("soclinks", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Мои соц. сети</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.url("vk", "https://vk.com/kriiiiiiiiiiiiiiiiiiiiiis"),
          Markup.button.url("instagram", "https://instagram.com/kriiiiiiis_96"),
        ],
        [
          Markup.button.url(
            "DonationAlerts🥰",
            "https://www.donationalerts.com/r/incontinenza"
          ),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
