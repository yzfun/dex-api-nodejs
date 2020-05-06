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
 * The InlineObject27 model module.
 * @module model/InlineObject27
 * @version 3.0
 */
class InlineObject27 {
    /**
     * Constructs a new <code>InlineObject27</code>.
     * @alias module:model/InlineObject27
     * @param baseReq {module:model/BaseReq} 
     * @param orderId {String} 
     */
    constructor(baseReq, orderId) { 
        
        InlineObject27.initialize(this, baseReq, orderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseReq, orderId) { 
        obj['base_req'] = baseReq;
        obj['order_id'] = orderId;
    }

    /**
     * Constructs a <code>InlineObject27</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject27} obj Optional instance to populate.
     * @return {module:model/InlineObject27} The populated <code>InlineObject27</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject27();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject27.prototype['base_req'] = undefined;

/**
 * @member {String} order_id
 */
InlineObject27.prototype['order_id'] = undefined;






export default InlineObject27;
