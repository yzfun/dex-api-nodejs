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

/**
 * The KVPair model module.
 * @module model/KVPair
 * @version 3.0
 */
class KVPair {
    /**
     * Constructs a new <code>KVPair</code>.
     * @alias module:model/KVPair
     */
    constructor() { 
        
        KVPair.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KVPair</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KVPair} obj Optional instance to populate.
     * @return {module:model/KVPair} The populated <code>KVPair</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KVPair();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
KVPair.prototype['key'] = undefined;

/**
 * @member {String} value
 */
KVPair.prototype['value'] = undefined;






export default KVPair;

