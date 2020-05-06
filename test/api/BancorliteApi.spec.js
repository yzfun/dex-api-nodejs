/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DexApiNodejs);
  }
}(this, function(expect, DexApiNodejs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DexApiNodejs.BancorliteApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BancorliteApi', function() {
    describe('bancorCancel', function() {
      it('should call bancorCancel successfully', function(done) {
        //uncomment below and update the code to test bancorCancel
        //instance.bancorCancel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bancorInit', function() {
      it('should call bancorInit successfully', function(done) {
        //uncomment below and update the code to test bancorInit
        //instance.bancorInit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bancorTrade', function() {
      it('should call bancorTrade successfully', function(done) {
        //uncomment below and update the code to test bancorTrade
        //instance.bancorTrade(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBancorInfo', function() {
      it('should call getBancorInfo successfully', function(done) {
        //uncomment below and update the code to test getBancorInfo
        //instance.getBancorInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBancorInfos', function() {
      it('should call getBancorInfos successfully', function(done) {
        //uncomment below and update the code to test getBancorInfos
        //instance.getBancorInfos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBancorliteParams', function() {
      it('should call getBancorliteParams successfully', function(done) {
        //uncomment below and update the code to test getBancorliteParams
        //instance.getBancorliteParams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
