'use strict'

const axios = require('axios');
const config = require('config');
const constants = require('constants');

//Yelp
async function yelpIt(command) {
    var params = command.split(' ');
    var limitY = 2;
    var responseStr = "";
    return axios.get('https://api.yelp.com/v3/businesses/search', {
            params : {
                term : params[1],
                location : params[2],
                limit : limitY,
                //Or openat 1hr after asked
                open_now : true
                //Add in sort by
            },
            headers : {
                Authorization : `Bearer ${config.YELP_TOKENS.APIKey}`
            }})
    .then(response => {
        for(var i = 0; i < limitY; i++){
            var restaurant = response.data.businesses[i];
            responseStr +=  `Name: ${restaurant.name}\n`+
                            `Rating: ${restaurant.rating}\n`+
                            `Price: ${restaurant.price}\n`+
                            `URL: ${restaurant.url}\n`+
                            `ImageURL: ${restaurant.image_url}\n\n`;
        }
        return responseStr;
    })
    .catch(e => {
        console.log('ERROR');
        console.log(`${e}`);
        throw 'ERROR';
    });
}

//Birthdays

//Events Near Mevar


module.exports.yelpIt = yelpIt;