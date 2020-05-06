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
    instance = new DexApiNodejs.Addresses();
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

  describe('Addresses', function() {
    it('should create an instance of Addresses', function() {
      // uncomment below and update the code to test Addresses
      //var instane = new DexApiNodejs.Addresses();
      //expect(instance).to.be.a(DexApiNodejs.Addresses);
    });

    it('should have the property baseReq (base name: "base_req")', function() {
      // uncomment below and update the code to test the property baseReq
      //var instane = new DexApiNodejs.Addresses();
      //expect(instance).to.be();
    });

    it('should have the property addresses (base name: "addresses")', function() {
      // uncomment below and update the code to test the property addresses
      //var instane = new DexApiNodejs.Addresses();
      //expect(instance).to.be();
    });

  });

}));
