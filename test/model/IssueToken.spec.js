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
    instance = new DexApiNodejs.IssueToken();
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

  describe('IssueToken', function() {
    it('should create an instance of IssueToken', function() {
      // uncomment below and update the code to test IssueToken
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be.a(DexApiNodejs.IssueToken);
    });

    it('should have the property baseReq (base name: "base_req")', function() {
      // uncomment below and update the code to test the property baseReq
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property totalSupply (base name: "total_supply")', function() {
      // uncomment below and update the code to test the property totalSupply
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property mintable (base name: "mintable")', function() {
      // uncomment below and update the code to test the property mintable
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property burnable (base name: "burnable")', function() {
      // uncomment below and update the code to test the property burnable
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property addrForbiddable (base name: "addr_forbiddable")', function() {
      // uncomment below and update the code to test the property addrForbiddable
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property tokenForbiddable (base name: "token_forbiddable")', function() {
      // uncomment below and update the code to test the property tokenForbiddable
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

    it('should have the property identity (base name: "identity")', function() {
      // uncomment below and update the code to test the property identity
      //var instane = new DexApiNodejs.IssueToken();
      //expect(instance).to.be();
    });

  });

}));
