'use strict'

const axios = require('axios');
const config = require('config');
const constants = require('constants');

//Yelp


async function yelpIt(command) {
    var params = command.split(' ');
    var limitY = 1;
    var yelpPromise = axios.get('https://api.yelp.com/v3/businesses/search', {
            params : {
                term : params[1],
                location : params[2],
                limit : limitY
            },
            headers : {
                Authorization : `Bearer ${config.YELP_TOKENS.APIKey}`
            }});
    var responseArr = [];
    yelpPromise.then(response => {
        for(var i = 0; i < limitY; i++){
            var restaurant = response.data.businesses[i];
            if(restaurant.isClosed == true)
                continue;
            responseArr[i] = {
                Name : restaurant.name,
                Rating : restaurant.rating,
                Price : restaurant.price,
                URL : restaurant.url,
                ImageURL : restaurant.image_url
            }
        }
    })
    .catch(e => {
        console.log('ERROR');
        console.log(`${e}`);
        throw 'ERROR';
    });
    return responseArr;
}

//Birthdays

//Events Near Mevar


module.exports.yelpIt = yelpIt;