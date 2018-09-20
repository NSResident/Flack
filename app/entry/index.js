'use strict'

const BootBot = require('bootbot');
const Switch = require('../parser/switch');
// const {Worker, workerData} = require('worker-threads')
var config = require('config');
console.log(config.get('FACEBOOK_TOKENS'));
const bot = new BootBot(
	config.get('FACEBOOK_TOKENS')
	// accessToken: 'EAAEM6NW9EAYBAAu1OAafr3gkX7rSWIZCDGjqRjYn7VCwZBG5gdn33qL8eTxePOvl4cLMr7Ky09rZCZAmHAuZCDM1KzKx8CuvC7M5yoZCinkanZCCAHZBAw63ZCxf1rR9f1MEgMdE2hsNG67NR53A8pClz8ZCfUX6ZB6mIa81JtPQxjebAZDZD',
	// verifyToken: 'YEE0LPNMSt3Lk867PiGw',
	// appSecret: '63f3db3dc8fe97981ca22d6f99b480c9'
);

bot.on('message', (payload, chat) => {

	const textH = payload.message.text;

	//Make this async for promise
	Switch.function_switch(payload.message.text, payload.sender.id, payload.recipient.id, payload.timestamp);

	//..... .then(Say response based on promise)
	chat.say(`Echo: ${textH}`);
});
	
bot.start(8080);
