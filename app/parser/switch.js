'use strict'

const BootBot = require('bootbot');
const singleChat = require('../singleChat/features')
const GroupChat = require('../groupChat/features')
const Constants = require('./constants')

//Create promises
async function function_switch(message, sender, receiver, ts){
    var botResult;
    if(Constants.REGEX_FOOD.test(message)){
        console.log("In FOOD");
    }
    else if(Constants.REGEX_LINK.test(message)){
        console.log("In Links");
    }
    else if(Constants.REGEX_BIRTHDAY.test(message)){
        console.log("In Birthday");
    }
    else if(Constants.REGEX_YELP.test(message)){
        console.log("In Yelp");
        var yelpPromise = singleChat.yelpIt(message);
        yelpPromise.then(result => {
           console.log(result);
           botResult = result;
        });
        yelpPromise.catch(() => {
           throw 'Error';
        });
    }
    return botResult;
}

module.exports.function_switch = function_switch;

