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
    instance = new DexApiNodejs.InlineResponse200NodeInfo();
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

  describe('InlineResponse200NodeInfo', function() {
    it('should create an instance of InlineResponse200NodeInfo', function() {
      // uncomment below and update the code to test InlineResponse200NodeInfo
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be.a(DexApiNodejs.InlineResponse200NodeInfo);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property moniker (base name: "moniker")', function() {
      // uncomment below and update the code to test the property moniker
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property protocolVersion (base name: "protocol_version")', function() {
      // uncomment below and update the code to test the property protocolVersion
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property listenAddr (base name: "listen_addr")', function() {
      // uncomment below and update the code to test the property listenAddr
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property other (base name: "other")', function() {
      // uncomment below and update the code to test the property other
      //var instane = new DexApiNodejs.InlineResponse200NodeInfo();
      //expect(instance).to.be();
    });

  });

}));
