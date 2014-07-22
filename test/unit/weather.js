/* global describe, it */
/* jshint expr:true */
'use strict';

var expect = require('chai').expect;

var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('.high', function(){
    it('should give us the high temp for today', function(done){
      Weather.high('37221', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
        console.log(temp);
      });
    });
  });
  describe('.low', function(){
    it('should give us the low temp for today', function(done){
      Weather.low('37221', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
        console.log(temp);
      });
    });
  });
});
