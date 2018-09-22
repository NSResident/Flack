'use strict'

const BootBot = require('bootbot');
const singleChat = require('../singleChat/features')
const GroupChat = require('../groupChat/features')
const Constants = require('./constants')

//Create promises
async function function_switch(message, sender, receiver, ts){
    var botResult = 'Didnt work';
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
        // var result = await singleChat.yelpIt(message);
        return singleChat.yelpIt(message)
        .then(result => {
           console.log(result);
           return result;
        })
        .catch(() => {throw "Error"});
    }
}

module.exports.function_switch = function_switch;

