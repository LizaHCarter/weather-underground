/* global describe, it */
/* jshint expr:true */
'use strict';

var expect = require('chai').expect;

var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('.high', function(){
    it('should give us the high temp for today', function(done){
      Weather.high('37217', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
        console.log(temp);
      });
    });
  });
  describe('.low', function(){
    it('should give us the low temp for today', function(done){
      Weather.low('37217', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
        console.log(temp);
      });
    });
  });
  describe('.avgHigh', function(){
    it('should give us the avg high temp for 10 day forecast', function(done){
      Weather.avgHigh('37217', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
        console.log(temp);
      });
    });
  });
  describe('.avgLow', function(){
    it('should give us the avg low temp for 10 day forecast', function(done){
      Weather.avgLow('37217', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
        console.log(temp);
      });
    });
  });
});
