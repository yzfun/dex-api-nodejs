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


import ApiClient from "../ApiClient";
import InlineObject29 from '../model/InlineObject29';
import InlineResponse20048 from '../model/InlineResponse20048';
import InlineResponse20049 from '../model/InlineResponse20049';
import InlineResponse20050 from '../model/InlineResponse20050';
import StdTx from '../model/StdTx';

/**
* Alias service.
* @module api/AliasApi
* @version 3.0
*/
export default class AliasApi {

    /**
    * Constructs a new AliasApi. 
    * @alias module:api/AliasApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Given an alias, query the corresponding address
     * @param {String} alias The alias to be queried
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20048} and HTTP response
     */
    getAddressFromAliasWithHttpInfo(alias) {
      let postBody = null;
      // verify the required parameter 'alias' is set
      if (alias === undefined || alias === null) {
        throw new Error("Missing the required parameter 'alias' when calling getAddressFromAlias");
      }

      let pathParams = {
        'alias': alias
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
      let returnType = InlineResponse20048;
      return this.apiClient.callApi(
        '/alias/address-of-alias/{alias}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Given an alias, query the corresponding address
     * @param {String} alias The alias to be queried
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20048}
     */
    getAddressFromAlias(alias) {
      return this.getAddressFromAliasWithHttpInfo(alias)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current alias parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20050} and HTTP response
     */
    getAliasParamsWithHttpInfo() {
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
      let returnType = InlineResponse20050;
      return this.apiClient.callApi(
        '/alias/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the current alias parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20050}
     */
    getAliasParams() {
      return this.getAliasParamsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Given an account's address, query all the corresponding aliases
     * @param {String} address The account's address to be queried
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20049} and HTTP response
     */
    getAliasesFromAddressWithHttpInfo(address) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAliasesFromAddress");
      }

      let pathParams = {
        'address': address
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
      let returnType = InlineResponse20049;
      return this.apiClient.callApi(
        '/alias/aliases-of-address/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Given an account's address, query all the corresponding aliases
     * @param {String} address The account's address to be queried
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20049}
     */
    getAliasesFromAddress(address) {
      return this.getAliasesFromAddressWithHttpInfo(address)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add or remove alias for an address
     * @param {module:model/InlineObject29} aliasUpdateReq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    updateAliasWithHttpInfo(aliasUpdateReq) {
      let postBody = aliasUpdateReq;
      // verify the required parameter 'aliasUpdateReq' is set
      if (aliasUpdateReq === undefined || aliasUpdateReq === null) {
        throw new Error("Missing the required parameter 'aliasUpdateReq' when calling updateAlias");
      }

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
        '/alias/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add or remove alias for an address
     * @param {module:model/InlineObject29} aliasUpdateReq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    updateAlias(aliasUpdateReq) {
      return this.updateAliasWithHttpInfo(aliasUpdateReq)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
