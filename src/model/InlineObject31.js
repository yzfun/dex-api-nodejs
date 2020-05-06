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

import ApiClient from '../ApiClient';
import BaseReq from './BaseReq';

/**
 * The InlineObject31 model module.
 * @module model/InlineObject31
 * @version 3.0
 */
class InlineObject31 {
    /**
     * Constructs a new <code>InlineObject31</code>.
     * @alias module:model/InlineObject31
     */
    constructor() { 
        
        InlineObject31.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject31</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject31} obj Optional instance to populate.
     * @return {module:model/InlineObject31} The populated <code>InlineObject31</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject31();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('donation')) {
                obj['donation'] = ApiClient.convertToType(data['donation'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'Number');
            }
            if (data.hasOwnProperty('id_rewarded')) {
                obj['id_rewarded'] = ApiClient.convertToType(data['id_rewarded'], 'String');
            }
            if (data.hasOwnProperty('reward_target')) {
                obj['reward_target'] = ApiClient.convertToType(data['reward_target'], 'String');
            }
            if (data.hasOwnProperty('reward_token')) {
                obj['reward_token'] = ApiClient.convertToType(data['reward_token'], 'String');
            }
            if (data.hasOwnProperty('reward_amount')) {
                obj['reward_amount'] = ApiClient.convertToType(data['reward_amount'], 'String');
            }
            if (data.hasOwnProperty('attitudes')) {
                obj['attitudes'] = ApiClient.convertToType(data['attitudes'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject31.prototype['base_req'] = undefined;

/**
 * @member {String} token
 */
InlineObject31.prototype['token'] = undefined;

/**
 * @member {String} donation
 */
InlineObject31.prototype['donation'] = undefined;

/**
 * @member {String} title
 */
InlineObject31.prototype['title'] = undefined;

/**
 * @member {String} content
 */
InlineObject31.prototype['content'] = undefined;

/**
 * @member {Number} content_type
 */
InlineObject31.prototype['content_type'] = undefined;

/**
 * @member {String} id_rewarded
 */
InlineObject31.prototype['id_rewarded'] = undefined;

/**
 * @member {String} reward_target
 */
InlineObject31.prototype['reward_target'] = undefined;

/**
 * @member {String} reward_token
 */
InlineObject31.prototype['reward_token'] = undefined;

/**
 * @member {String} reward_amount
 */
InlineObject31.prototype['reward_amount'] = undefined;

/**
 * @member {Array.<Number>} attitudes
 */
InlineObject31.prototype['attitudes'] = undefined;






export default InlineObject31;

