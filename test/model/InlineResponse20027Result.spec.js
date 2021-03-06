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
    instance = new DexApiNodejs.InlineResponse20027Result();
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

  describe('InlineResponse20027Result', function() {
    it('should create an instance of InlineResponse20027Result', function() {
      // uncomment below and update the code to test InlineResponse20027Result
      //var instane = new DexApiNodejs.InlineResponse20027Result();
      //expect(instance).to.be.a(DexApiNodejs.InlineResponse20027Result);
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instane = new DexApiNodejs.InlineResponse20027Result();
      //expect(instance).to.be();
    });

    it('should have the property veto (base name: "veto")', function() {
      // uncomment below and update the code to test the property veto
      //var instane = new DexApiNodejs.InlineResponse20027Result();
      //expect(instance).to.be();
    });

    it('should have the property governancePenalty (base name: "governance_penalty")', function() {
      // uncomment below and update the code to test the property governancePenalty
      //var instane = new DexApiNodejs.InlineResponse20027Result();
      //expect(instance).to.be();
    });

  });

}));
