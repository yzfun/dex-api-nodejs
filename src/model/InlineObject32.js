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
import CommentRef from './CommentRef';

/**
 * The InlineObject32 model module.
 * @module model/InlineObject32
 * @version 3.0
 */
class InlineObject32 {
    /**
     * Constructs a new <code>InlineObject32</code>.
     * @alias module:model/InlineObject32
     */
    constructor() { 
        
        InlineObject32.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject32</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject32} obj Optional instance to populate.
     * @return {module:model/InlineObject32} The populated <code>InlineObject32</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject32();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], [CommentRef]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject32.prototype['base_req'] = undefined;

/**
 * @member {String} token
 */
InlineObject32.prototype['token'] = undefined;

/**
 * @member {Array.<module:model/CommentRef>} references
 */
InlineObject32.prototype['references'] = undefined;






export default InlineObject32;

