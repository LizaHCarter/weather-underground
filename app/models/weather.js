'use strict';

var request = require('request');
function Weather(){}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast/q/'+zip+'.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    cb(body.forecast.simpleforecast.forecastday[0].high.fahrenheit);
  });
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast/q/'+zip+'.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    cb(body.forecast.simpleforecast.forecastday[0].low.fahrenheit);
  });
};
module.exports = Weather;
