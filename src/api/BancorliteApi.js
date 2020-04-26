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

import ApiClient from "../ApiClient";
import StdTx from '../model/StdTx';

/**
* Bancorlite service.
* @module api/BancorliteApi
* @version 3.0
*/
export default class BancorliteApi {

    /**
    * Constructs a new BancorliteApi. 
    * @alias module:api/BancorliteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the bancorCancel operation.
     * @callback module:api/BancorliteApi~bancorCancelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StdTx} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * cancel bancor
     * @param {module:api/BancorliteApi~bancorCancelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StdTx}
     */
    bancorCancel(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;

      return this.apiClient.callApi(
        '/bancorlite/bancor-cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the bancorInit operation.
     * @callback module:api/BancorliteApi~bancorInitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StdTx} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create bancor
     * @param {module:api/BancorliteApi~bancorInitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StdTx}
     */
    bancorInit(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;

      return this.apiClient.callApi(
        '/bancorlite/bancor-init', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the bancorTrade operation.
     * @callback module:api/BancorliteApi~bancorTradeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StdTx} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * trade with bancor
     * @param {module:api/BancorliteApi~bancorTradeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StdTx}
     */
    bancorTrade(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;

      return this.apiClient.callApi(
        '/bancorlite/bancor-trade', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBancorInfo operation.
     * @callback module:api/BancorliteApi~getBancorInfoCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get the bancor pool info
     * @param {module:api/BancorliteApi~getBancorInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    getBancorInfo(symbol, callback) {
      let postBody = null;

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': Object};

      return this.apiClient.callApi(
        '/bancorlite/pools/{symbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBancorInfos operation.
     * @callback module:api/BancorliteApi~getBancorInfosCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all bancor infos
     * @param {module:api/BancorliteApi~getBancorInfosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getBancorInfos(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/bancorlite/infos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getBancorliteParams operation.
     * @callback module:api/BancorliteApi~getBancorliteParamsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current bancorlite parameters
     * @param {module:api/BancorliteApi~getBancorliteParamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getBancorliteParams(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/bancorlite/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}