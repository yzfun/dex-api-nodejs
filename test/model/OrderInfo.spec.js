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
    instance = new DexApiNodejs.OrderInfo();
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

  describe('OrderInfo', function() {
    it('should create an instance of OrderInfo', function() {
      // uncomment below and update the code to test OrderInfo
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be.a(DexApiNodejs.OrderInfo);
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property timeInForce (base name: "time_in_force")', function() {
      // uncomment below and update the code to test the property timeInForce
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property frozenFee (base name: "frozen_fee")', function() {
      // uncomment below and update the code to test the property frozenFee
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property leftStock (base name: "left_stock")', function() {
      // uncomment below and update the code to test the property leftStock
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property freeze (base name: "freeze")', function() {
      // uncomment below and update the code to test the property freeze
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property dealStock (base name: "DealStock")', function() {
      // uncomment below and update the code to test the property dealStock
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

    it('should have the property dealMoney (base name: "DealMoney")', function() {
      // uncomment below and update the code to test the property dealMoney
      //var instane = new DexApiNodejs.OrderInfo();
      //expect(instance).to.be();
    });

  });

}));
