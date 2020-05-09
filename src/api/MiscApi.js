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
import InlineResponse20053 from '../model/InlineResponse20053';
import InlineResponse20054 from '../model/InlineResponse20054';

/**
* Misc service.
* @module api/MiscApi
* @version 3.0
*/
export default class MiscApi {

    /**
    * Constructs a new MiscApi. 
    * @alias module:api/MiscApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Query block time
     * Query the block time up to given height
     * @param {Number} height Block height
     * @param {Number} count Querier count limited to 1024
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Number>} and HTTP response
     */
    queryBlockTimesWithHttpInfo(height, count) {
      let postBody = null;
      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling queryBlockTimes");
      }
      // verify the required parameter 'count' is set
      if (count === undefined || count === null) {
        throw new Error("Missing the required parameter 'count' when calling queryBlockTimes");
      }

      let pathParams = {
      };
      let queryParams = {
        'height': height,
        'count': count
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['Number'];
      return this.apiClient.callApi(
        '/misc/block-times', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query block time
     * Query the block time up to given height
     * @param {Number} height Block height
     * @param {Number} count Querier count limited to 1024
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Number>}
     */
    queryBlockTimes(height, count) {
      return this.queryBlockTimesWithHttpInfo(height, count)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Query donations info
     * Query donations by DonateToCommunityPool or CommentToken
     * @param {Number} time Unix timestamp
     * @param {Number} sid Sequence id
     * @param {Number} count Querier count limited to 1024
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20054} and HTTP response
     */
    queryDonationWithHttpInfo(time, sid, count) {
      let postBody = null;
      // verify the required parameter 'time' is set
      if (time === undefined || time === null) {
        throw new Error("Missing the required parameter 'time' when calling queryDonation");
      }
      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling queryDonation");
      }
      // verify the required parameter 'count' is set
      if (count === undefined || count === null) {
        throw new Error("Missing the required parameter 'count' when calling queryDonation");
      }

      let pathParams = {
      };
      let queryParams = {
        'time': time,
        'sid': sid,
        'count': count
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20054;
      return this.apiClient.callApi(
        '/misc/donations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query donations info
     * Query donations by DonateToCommunityPool or CommentToken
     * @param {Number} time Unix timestamp
     * @param {Number} sid Sequence id
     * @param {Number} count Querier count limited to 1024
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20054}
     */
    queryDonation(time, sid, count) {
      return this.queryDonationWithHttpInfo(time, sid, count)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Query least block info
     * Query least block info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20053} and HTTP response
     */
    queryLastBlockWithHttpInfo() {
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
      let returnType = InlineResponse20053;
      return this.apiClient.callApi(
        '/misc/height', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query least block info
     * Query least block info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20053}
     */
    queryLastBlock() {
      return this.queryLastBlockWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
