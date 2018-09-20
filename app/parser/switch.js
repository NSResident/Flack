'use strict'

const BootBot = require('bootbot');
const GroupChat = require('../groupChat/features')
const Constants = require('./constants')

//Create promises
function function_switch(message, sender, receiver, ts){
    if(Constants.REGEX_FOOD.test(message)){
        console.log("In FOOD");
    }
    else if(Constants.REGEX_LINK.test(message)){
        console.log("In Links");
    }
    else if(Constants.REGEX_BIRTHDAY.test(message)){
        console.log("In Birthday");
    }
}

module.exports.function_switch = function_switch;

