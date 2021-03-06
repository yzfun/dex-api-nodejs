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
 * The InlineResponse20050Result model module.
 * @module model/InlineResponse20050Result
 * @version 3.0
 */
class InlineResponse20050Result {
    /**
     * Constructs a new <code>InlineResponse20050Result</code>.
     * @alias module:model/InlineResponse20050Result
     */
    constructor() { 
        
        InlineResponse20050Result.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20050Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050Result} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050Result} The populated <code>InlineResponse20050Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050Result();

            if (data.hasOwnProperty('fee_for_alias_length_2')) {
                obj['fee_for_alias_length_2'] = ApiClient.convertToType(data['fee_for_alias_length_2'], 'String');
            }
            if (data.hasOwnProperty('fee_for_alias_length_3')) {
                obj['fee_for_alias_length_3'] = ApiClient.convertToType(data['fee_for_alias_length_3'], 'String');
            }
            if (data.hasOwnProperty('fee_for_alias_length_4')) {
                obj['fee_for_alias_length_4'] = ApiClient.convertToType(data['fee_for_alias_length_4'], 'String');
            }
            if (data.hasOwnProperty('fee_for_alias_length_5')) {
                obj['fee_for_alias_length_5'] = ApiClient.convertToType(data['fee_for_alias_length_5'], 'String');
            }
            if (data.hasOwnProperty('fee_for_alias_length_6')) {
                obj['fee_for_alias_length_6'] = ApiClient.convertToType(data['fee_for_alias_length_6'], 'String');
            }
            if (data.hasOwnProperty('fee_for_alias_length_7_or_higher')) {
                obj['fee_for_alias_length_7_or_higher'] = ApiClient.convertToType(data['fee_for_alias_length_7_or_higher'], 'String');
            }
            if (data.hasOwnProperty('max_alias_count')) {
                obj['max_alias_count'] = ApiClient.convertToType(data['max_alias_count'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fee_for_alias_length_2
 */
InlineResponse20050Result.prototype['fee_for_alias_length_2'] = undefined;

/**
 * @member {String} fee_for_alias_length_3
 */
InlineResponse20050Result.prototype['fee_for_alias_length_3'] = undefined;

/**
 * @member {String} fee_for_alias_length_4
 */
InlineResponse20050Result.prototype['fee_for_alias_length_4'] = undefined;

/**
 * @member {String} fee_for_alias_length_5
 */
InlineResponse20050Result.prototype['fee_for_alias_length_5'] = undefined;

/**
 * @member {String} fee_for_alias_length_6
 */
InlineResponse20050Result.prototype['fee_for_alias_length_6'] = undefined;

/**
 * @member {String} fee_for_alias_length_7_or_higher
 */
InlineResponse20050Result.prototype['fee_for_alias_length_7_or_higher'] = undefined;

/**
 * @member {String} max_alias_count
 */
InlineResponse20050Result.prototype['max_alias_count'] = undefined;






export default InlineResponse20050Result;

