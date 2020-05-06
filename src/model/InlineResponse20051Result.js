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
 * The InlineResponse20051Result model module.
 * @module model/InlineResponse20051Result
 * @version 3.0
 */
class InlineResponse20051Result {
    /**
     * Constructs a new <code>InlineResponse20051Result</code>.
     * @alias module:model/InlineResponse20051Result
     */
    constructor() { 
        
        InlineResponse20051Result.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20051Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20051Result} obj Optional instance to populate.
     * @return {module:model/InlineResponse20051Result} The populated <code>InlineResponse20051Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20051Result();

            if (data.hasOwnProperty('create_bancor_fee')) {
                obj['create_bancor_fee'] = ApiClient.convertToType(data['create_bancor_fee'], 'String');
            }
            if (data.hasOwnProperty('cancel_bancor_fee')) {
                obj['cancel_bancor_fee'] = ApiClient.convertToType(data['cancel_bancor_fee'], 'String');
            }
            if (data.hasOwnProperty('trade_fee_rate')) {
                obj['trade_fee_rate'] = ApiClient.convertToType(data['trade_fee_rate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} create_bancor_fee
 */
InlineResponse20051Result.prototype['create_bancor_fee'] = undefined;

/**
 * @member {String} cancel_bancor_fee
 */
InlineResponse20051Result.prototype['cancel_bancor_fee'] = undefined;

/**
 * @member {String} trade_fee_rate
 */
InlineResponse20051Result.prototype['trade_fee_rate'] = undefined;






export default InlineResponse20051Result;

