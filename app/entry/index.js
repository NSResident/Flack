'use strict'

const BootBot = require('bootbot');
const Switch = require('../parser/switch');
// const {Worker, workerData} = require('worker-threads')
var config = require('config');
console.log(config.get('FACEBOOK_TOKENS'));
const bot = new BootBot(
	config.get('FACEBOOK_TOKENS')
);

bot.on('message', (payload, chat) => {

	Switch.function_switch(payload.message.text, payload.sender.id, payload.recipient.id, payload.timestamp)
	.then(message =>{
		console.log(message);
		chat.say(`${message}`);
	})
	.catch(() => {chat.say('Didnt work')});

	//..... .then(Say response based on promise)
});
	
bot.start(8080);
