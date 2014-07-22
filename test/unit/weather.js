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
        expect(temp).to.be.within(-50, 150);
        done();
        console.log(temp);
      });
    });
  });
  describe('.avgLow', function(){
    it('should give us the avg low temp for 10 day forecast', function(done){
      Weather.avgLow('37217', function(temp){
        expect(temp).to.be.ok;
        expect(temp).to.be.within(-50, 150);
        done();
        console.log(temp);
      });
    });
  });
  describe('.stdevLow', function(){
    it('should give us standard deviation of lows', function(done){
      Weather.stdevLow('37217', function(temp){
        expect(temp).to.be.ok;
        expect(temp).to.be.within(1, 10);
        done();
        console.log(temp);
      });
    });
  });
  describe('.stdevHigh', function(){
    it('should give us standard deviation of lows', function(done){
      Weather.stdevHigh('37217', function(temp){
        expect(temp).to.be.ok;
        expect(temp).to.be.within(1, 10);
        done();
        console.log(temp);
      });
    });
  });
  describe('.highs', function(){
    it('should list highs for the next 10 days', function(done){
      Weather.highs('37217', function(highs){
        expect(highs).to.be.ok;
        expect(highs).to.have.length(10);
        done();
        console.log(highs);
      });
    });
  });
  describe('.lows', function(){
    it('should list lows for the next 10 days', function(done){
      Weather.lows('37217', function(lows){
        expect(lows).to.be.ok;
        expect(lows).to.have.length(10);
        done();
        console.log(lows);
      });
    });
  });
  describe('.deltas', function(){
    it('should list for the next 10 days', function(done){
      Weather.deltas('37217', function(deltas){
        expect(deltas).to.be.ok;
        expect(deltas).to.have.length(10);
        done();
        console.log(deltas);
      });
    });
  });
});
