'use strict';

var request = require('request');
function Weather(){}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast/q/'+zip+'.json';
  
  request(url, function(error, response, body){
    //debugger;
    body = JSON.parse(body);
    var high =body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    var temp = high + 'F';
    cb(temp);
  });
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast/q/'+zip+'.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var low =body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var temp = low + 'F';
    cb(temp);
  });
};


Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast10day/q/'+zip+'.json';
  
  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    var sum = 0;
    for(var i=0; i<10; i++){
      sum += parseInt(body.forecast.simpleforecast.forecastday[i].high.fahrenheit);
    }
    var avg = sum / 10;
    var temp = parseInt(avg) + 'F';
    cb(temp);
  });
};


Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast10day/q/'+zip+'.json';
  
  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    var sum = 0;
    for(var i=0; i<10; i++){
      sum += parseInt(body.forecast.simpleforecast.forecastday[i].low.fahrenheit);
    }
    var avg = sum / 10;
    var temp = parseInt(avg) + 'F';
    cb(temp);
  });
};
module.exports = Weather;
