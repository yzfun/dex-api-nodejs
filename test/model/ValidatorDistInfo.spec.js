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
    instance = new DexApiNodejs.ValidatorDistInfo();
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

  describe('ValidatorDistInfo', function() {
    it('should create an instance of ValidatorDistInfo', function() {
      // uncomment below and update the code to test ValidatorDistInfo
      //var instane = new DexApiNodejs.ValidatorDistInfo();
      //expect(instance).to.be.a(DexApiNodejs.ValidatorDistInfo);
    });

    it('should have the property operatorAddress (base name: "operator_address")', function() {
      // uncomment below and update the code to test the property operatorAddress
      //var instane = new DexApiNodejs.ValidatorDistInfo();
      //expect(instance).to.be();
    });

    it('should have the property selfBondRewards (base name: "self_bond_rewards")', function() {
      // uncomment below and update the code to test the property selfBondRewards
      //var instane = new DexApiNodejs.ValidatorDistInfo();
      //expect(instance).to.be();
    });

    it('should have the property valCommission (base name: "val_commission")', function() {
      // uncomment below and update the code to test the property valCommission
      //var instane = new DexApiNodejs.ValidatorDistInfo();
      //expect(instance).to.be();
    });

  });

}));
