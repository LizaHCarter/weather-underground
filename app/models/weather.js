'use strict';
var Calc = require('../../../calculator/app/models/calc');
var request = require('request');
function Weather(){}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast/q/'+zip+'.json';
  
  request(url, function(error, response, body){
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
    body = JSON.parse(body);
    var sum = 0;
    for(var i=0; i<10; i++){
      sum += parseInt(body.forecast.simpleforecast.forecastday[i].high.fahrenheit);
    }
    var avg = sum / 10;
    var temp = parseInt(avg);
    cb(parseInt(temp));
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
    var temp = parseInt(avg);
    cb(parseInt(temp));
  });
};

Weather.stdevLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast10day/q/'+zip+'.json';
  var diffs = [];
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var sum = 0;
    for(var i=0; i<10; i++){
      sum += parseInt(body.forecast.simpleforecast.forecastday[i].low.fahrenheit);
    }
    var avg = sum / 10;
    for(i=0; i<10; i++){
      body.forecast.simpleforecast.forecastday[i].low.fahrenheit -= avg;
      diffs.push(Math.pow((body.forecast.simpleforecast.forecastday[i].low.fahrenheit), 2));
    }
    var temp = Math.sqrt(Calc.mean(diffs));
    cb(parseInt(temp));
  });
};

Weather.stdevHigh= function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast10day/q/'+zip+'.json';
  var diffs = [];
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var sum = 0;
    for(var i=0; i<10; i++){
      sum += parseInt(body.forecast.simpleforecast.forecastday[i].high.fahrenheit);
    }
    var avg = sum / 10;
    for(i=0; i<10; i++){
      body.forecast.simpleforecast.forecastday[i].high.fahrenheit -= avg;
      diffs.push(Math.pow((body.forecast.simpleforecast.forecastday[i].high.fahrenheit), 2));
    }
    var temp = Math.sqrt(Calc.mean(diffs));
    cb(parseInt(temp));
  });
};

Weather.highs = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast10day/q/'+zip+'.json';
  var highs = [];
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var forecasts = body.forecast.simpleforecast.forecastday;
    for(var i=0; i<forecasts.length; i++){
      highs.push(forecasts[i].high.fahrenheit);
    }
    cb(highs);
  });
};

Weather.lows = function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast10day/q/'+zip+'.json';
  var lows = [];
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var forecasts = body.forecast.simpleforecast.forecastday;
    for(var i=0; i<forecasts.length; i++){
      lows.push(forecasts[i].low.fahrenheit);
    }
    cb(lows);
  });
};

Weather.deltas= function(zip, cb){
  var url = 'http://api.wunderground.com/api/6904868a2f38a2ae/forecast10day/q/'+zip+'.json';
  var lows   = [];
  var highs  = [];
  var deltas = [];
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var forecasts = body.forecast.simpleforecast.forecastday;
    for(var i=0; i<forecasts.length; i++){
      highs.push(parseInt(forecasts[i].high.fahrenheit));
    }
    for(i=0; i<forecasts.length; i++){
      lows.push(parseInt(forecasts[i].low.fahrenheit));
    }
    for(i=0; i<forecasts.length; i++){
      deltas.push(highs[i]-lows[i]);
    }
    cb(deltas);
  });
};

module.exports = Weather;
