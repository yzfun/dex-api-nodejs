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
 * The InlineObject29 model module.
 * @module model/InlineObject29
 * @version 3.0
 */
class InlineObject29 {
    /**
     * Constructs a new <code>InlineObject29</code>.
     * @alias module:model/InlineObject29
     */
    constructor() { 
        
        InlineObject29.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject29</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject29} obj Optional instance to populate.
     * @return {module:model/InlineObject29} The populated <code>InlineObject29</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject29();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('alias')) {
                obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
            }
            if (data.hasOwnProperty('is_add')) {
                obj['is_add'] = ApiClient.convertToType(data['is_add'], 'Boolean');
            }
            if (data.hasOwnProperty('as_default')) {
                obj['as_default'] = ApiClient.convertToType(data['as_default'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject29.prototype['base_req'] = undefined;

/**
 * @member {String} alias
 */
InlineObject29.prototype['alias'] = undefined;

/**
 * @member {Boolean} is_add
 */
InlineObject29.prototype['is_add'] = undefined;

/**
 * @member {Boolean} as_default
 */
InlineObject29.prototype['as_default'] = undefined;






export default InlineObject29;

