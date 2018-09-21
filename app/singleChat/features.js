'use strict'

const axios = require('axios');
const config = require('config');
const constants = require('constants');

//Yelp
function yelpIt(command) {
    var params = command.split(' ');
    var limitY = 5;
    axios.get('https://api.yelp.com/v3/businesses/search', {
            params : {
                term : params[1],
                location : params[2],
                limit : limitY
            },
            headers : {
                Authorization : `Bearer ${config.YELP_TOKENS.APIKey}`
            }
        })
        .then(response => {
            // console.log(response.data);
            var responseArr = [];
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
            console.log(responseArr);
        })
        .catch(e => {
            console.log('ERROR');
            console.log(`${e}`);
        });
}

//Birthdays

//Events Near Mevar


module.exports.yelpIt = yelpIt;