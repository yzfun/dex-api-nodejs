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
import Donation from './Donation';

/**
 * The InlineResponse20054 model module.
 * @module model/InlineResponse20054
 * @version 3.0
 */
class InlineResponse20054 {
    /**
     * Constructs a new <code>InlineResponse20054</code>.
     * @alias module:model/InlineResponse20054
     */
    constructor() { 
        
        InlineResponse20054.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20054</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20054} obj Optional instance to populate.
     * @return {module:model/InlineResponse20054} The populated <code>InlineResponse20054</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20054();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Donation]);
            }
            if (data.hasOwnProperty('timesid')) {
                obj['timesid'] = ApiClient.convertToType(data['timesid'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Donation>} data
 */
InlineResponse20054.prototype['data'] = undefined;

/**
 * @member {Array.<Number>} timesid
 */
InlineResponse20054.prototype['timesid'] = undefined;






export default InlineResponse20054;

