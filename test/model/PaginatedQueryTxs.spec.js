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
    instance = new DexApiNodejs.PaginatedQueryTxs();
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

  describe('PaginatedQueryTxs', function() {
    it('should create an instance of PaginatedQueryTxs', function() {
      // uncomment below and update the code to test PaginatedQueryTxs
      //var instane = new DexApiNodejs.PaginatedQueryTxs();
      //expect(instance).to.be.a(DexApiNodejs.PaginatedQueryTxs);
    });

    it('should have the property totalCount (base name: "total_count")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instane = new DexApiNodejs.PaginatedQueryTxs();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new DexApiNodejs.PaginatedQueryTxs();
      //expect(instance).to.be();
    });

    it('should have the property pageNumber (base name: "page_number")', function() {
      // uncomment below and update the code to test the property pageNumber
      //var instane = new DexApiNodejs.PaginatedQueryTxs();
      //expect(instance).to.be();
    });

    it('should have the property pageTotal (base name: "page_total")', function() {
      // uncomment below and update the code to test the property pageTotal
      //var instane = new DexApiNodejs.PaginatedQueryTxs();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instane = new DexApiNodejs.PaginatedQueryTxs();
      //expect(instance).to.be();
    });

    it('should have the property txs (base name: "txs")', function() {
      // uncomment below and update the code to test the property txs
      //var instane = new DexApiNodejs.PaginatedQueryTxs();
      //expect(instance).to.be();
    });

  });

}));
