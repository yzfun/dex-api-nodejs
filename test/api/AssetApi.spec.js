/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DexApiNodejs);
  }
}(this, function(expect, DexApiNodejs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DexApiNodejs.AssetApi();
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

  describe('AssetApi', function() {
    describe('addWhitelist', function() {
      it('should call addWhitelist successfully', function(done) {
        //uncomment below and update the code to test addWhitelist
        //instance.addWhitelist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('burnToken', function() {
      it('should call burnToken successfully', function(done) {
        //uncomment below and update the code to test burnToken
        //instance.burnToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forbidAddr', function() {
      it('should call forbidAddr successfully', function(done) {
        //uncomment below and update the code to test forbidAddr
        //instance.forbidAddr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forbidToken', function() {
      it('should call forbidToken successfully', function(done) {
        //uncomment below and update the code to test forbidToken
        //instance.forbidToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetParams', function() {
      it('should call getAssetParams successfully', function(done) {
        //uncomment below and update the code to test getAssetParams
        //instance.getAssetParams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getForbiddenAddresses', function() {
      it('should call getForbiddenAddresses successfully', function(done) {
        //uncomment below and update the code to test getForbiddenAddresses
        //instance.getForbiddenAddresses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReservedSymbols', function() {
      it('should call getReservedSymbols successfully', function(done) {
        //uncomment below and update the code to test getReservedSymbols
        //instance.getReservedSymbols(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getToken', function() {
      it('should call getToken successfully', function(done) {
        //uncomment below and update the code to test getToken
        //instance.getToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTokenList', function() {
      it('should call getTokenList successfully', function(done) {
        //uncomment below and update the code to test getTokenList
        //instance.getTokenList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhitelist', function() {
      it('should call getWhitelist successfully', function(done) {
        //uncomment below and update the code to test getWhitelist
        //instance.getWhitelist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issueToken', function() {
      it('should call issueToken successfully', function(done) {
        //uncomment below and update the code to test issueToken
        //instance.issueToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mintToken', function() {
      it('should call mintToken successfully', function(done) {
        //uncomment below and update the code to test mintToken
        //instance.mintToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyTokenInfo', function() {
      it('should call modifyTokenInfo successfully', function(done) {
        //uncomment below and update the code to test modifyTokenInfo
        //instance.modifyTokenInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeWhitelist', function() {
      it('should call removeWhitelist successfully', function(done) {
        //uncomment below and update the code to test removeWhitelist
        //instance.removeWhitelist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transferOwnership', function() {
      it('should call transferOwnership successfully', function(done) {
        //uncomment below and update the code to test transferOwnership
        //instance.transferOwnership(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unForbidAddr', function() {
      it('should call unForbidAddr successfully', function(done) {
        //uncomment below and update the code to test unForbidAddr
        //instance.unForbidAddr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unFrobidToken', function() {
      it('should call unFrobidToken successfully', function(done) {
        //uncomment below and update the code to test unFrobidToken
        //instance.unFrobidToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));