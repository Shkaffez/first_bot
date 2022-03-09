const TelegramApi = require('node-telegram-bot-api');
const token = '5293750705:AAE61gAR8y7phQ2BKGMVruT5mW-Z3RQt0r0';
const bot = new TelegramApi(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'начальное заполнение'},
    {command: '/info', description: 'получить инфо о пользователе'},
])

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if(text === '/start') {
        bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/5cc/7a5/5cc7a5e5-1c4d-4eb5-8ea2-94a23e4142a9/1.webp')
        bot.sendMessage(chatId, 'Привет!');
    }
    if(text === '/info') {
        bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name}`);
    }
})