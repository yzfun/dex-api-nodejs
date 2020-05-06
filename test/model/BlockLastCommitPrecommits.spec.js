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
    instance = new DexApiNodejs.BlockLastCommitPrecommits();
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

  describe('BlockLastCommitPrecommits', function() {
    it('should create an instance of BlockLastCommitPrecommits', function() {
      // uncomment below and update the code to test BlockLastCommitPrecommits
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be.a(DexApiNodejs.BlockLastCommitPrecommits);
    });

    it('should have the property validatorAddress (base name: "validator_address")', function() {
      // uncomment below and update the code to test the property validatorAddress
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

    it('should have the property validatorIndex (base name: "validator_index")', function() {
      // uncomment below and update the code to test the property validatorIndex
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

    it('should have the property round (base name: "round")', function() {
      // uncomment below and update the code to test the property round
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

    it('should have the property blockId (base name: "block_id")', function() {
      // uncomment below and update the code to test the property blockId
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instane = new DexApiNodejs.BlockLastCommitPrecommits();
      //expect(instance).to.be();
    });

  });

}));
