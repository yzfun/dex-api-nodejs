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
import BroadcastTxCommitResult from '../model/BroadcastTxCommitResult';
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineResponse2003 from '../model/InlineResponse2003';
import PaginatedQueryTxs from '../model/PaginatedQueryTxs';

/**
* Transactions service.
* @module api/TransactionsApi
* @version 3.0
*/
export default class TransactionsApi {

    /**
    * Constructs a new TransactionsApi. 
    * @alias module:api/TransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Broadcast a signed tx
     * Broadcast a signed tx to a full node
     * @param {module:model/InlineObject} txBroadcast 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BroadcastTxCommitResult} and HTTP response
     */
    broadcastTxWithHttpInfo(txBroadcast) {
      let postBody = txBroadcast;
      // verify the required parameter 'txBroadcast' is set
      if (txBroadcast === undefined || txBroadcast === null) {
        throw new Error("Missing the required parameter 'txBroadcast' when calling broadcastTx");
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
      let returnType = BroadcastTxCommitResult;
      return this.apiClient.callApi(
        '/txs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Broadcast a signed tx
     * Broadcast a signed tx to a full node
     * @param {module:model/InlineObject} txBroadcast 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BroadcastTxCommitResult}
     */
    broadcastTx(txBroadcast) {
      return this.broadcastTxWithHttpInfo(txBroadcast)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Encode a transaction to the Amino wire format
     * Encode a transaction (signed or not) from JSON to base64-encoded Amino serialized bytes
     * @param {module:model/InlineObject1} tx 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    encodeTxWithHttpInfo(tx) {
      let postBody = tx;
      // verify the required parameter 'tx' is set
      if (tx === undefined || tx === null) {
        throw new Error("Missing the required parameter 'tx' when calling encodeTx");
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
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/txs/encode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Encode a transaction to the Amino wire format
     * Encode a transaction (signed or not) from JSON to base64-encoded Amino serialized bytes
     * @param {module:model/InlineObject1} tx 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    encodeTx(tx) {
      return this.encodeTxWithHttpInfo(tx)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Tx by hash
     * @param {String} hash Tx hash
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BroadcastTxCommitResult} and HTTP response
     */
    getTxByHashWithHttpInfo(hash) {
      let postBody = null;
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getTxByHash");
      }

      let pathParams = {
        'hash': hash
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
      let returnType = BroadcastTxCommitResult;
      return this.apiClient.callApi(
        '/txs/{hash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a Tx by hash
     * @param {String} hash Tx hash
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BroadcastTxCommitResult}
     */
    getTxByHash(hash) {
      return this.getTxByHashWithHttpInfo(hash)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search transactions
     * Search transactions by events.
     * @param {Object} opts Optional parameters
     * @param {String} opts.messageAction transaction events such as 'message.action=send' which results in the following endpoint: 'GET /txs?message.action=send'
     * @param {String} opts.messageSender transaction tags with sender: 'GET /txs?message.action=send&message.sender=cosmos16xyempempp92x9hyzz9wrgf94r6j9h5f06pxxv'
     * @param {Number} opts.page Page number
     * @param {Number} opts.limit Maximum number of items per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaginatedQueryTxs} and HTTP response
     */
    searchTxWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'message.action': opts['messageAction'],
        'message.sender': opts['messageSender'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedQueryTxs;
      return this.apiClient.callApi(
        '/txs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search transactions
     * Search transactions by events.
     * @param {Object} opts Optional parameters
     * @param {String} opts.messageAction transaction events such as 'message.action=send' which results in the following endpoint: 'GET /txs?message.action=send'
     * @param {String} opts.messageSender transaction tags with sender: 'GET /txs?message.action=send&message.sender=cosmos16xyempempp92x9hyzz9wrgf94r6j9h5f06pxxv'
     * @param {Number} opts.page Page number
     * @param {Number} opts.limit Maximum number of items per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaginatedQueryTxs}
     */
    searchTx(opts) {
      return this.searchTxWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
