'use strict'

const BootBot = require('bootbot')

const bot = new BootBot({
	accessToken: 'EAAEM6NW9EAYBAAu1OAafr3gkX7rSWIZCDGjqRjYn7VCwZBG5gdn33qL8eTxePOvl4cLMr7Ky09rZCZAmHAuZCDM1KzKx8CuvC7M5yoZCinkanZCCAHZBAw63ZCxf1rR9f1MEgMdE2hsNG67NR53A8pClz8ZCfUX6ZB6mIa81JtPQxjebAZDZD',
	verifyToken: 'YEE0LPNMSt3Lk867PiGw',
	appSecret: '63f3db3dc8fe97981ca22d6f99b480c9'
});

bot.on('message', (payload, chat) => {

	const textH = payload.message.text;
	console.log(`User said: ${textH}`);
	chat.say(`Echo: ${textH}`);
});
	
bot.start(1337);
