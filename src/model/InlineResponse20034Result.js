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
 * The InlineResponse20034Result model module.
 * @module model/InlineResponse20034Result
 * @version 3.0
 */
class InlineResponse20034Result {
    /**
     * Constructs a new <code>InlineResponse20034Result</code>.
     * @alias module:model/InlineResponse20034Result
     */
    constructor() { 
        
        InlineResponse20034Result.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20034Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20034Result} obj Optional instance to populate.
     * @return {module:model/InlineResponse20034Result} The populated <code>InlineResponse20034Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20034Result();

            if (data.hasOwnProperty('max_memo_characters')) {
                obj['max_memo_characters'] = ApiClient.convertToType(data['max_memo_characters'], 'String');
            }
            if (data.hasOwnProperty('tx_sig_limit')) {
                obj['tx_sig_limit'] = ApiClient.convertToType(data['tx_sig_limit'], 'String');
            }
            if (data.hasOwnProperty('tx_size_cost_per_byte')) {
                obj['tx_size_cost_per_byte'] = ApiClient.convertToType(data['tx_size_cost_per_byte'], 'String');
            }
            if (data.hasOwnProperty('sig_verify_cost_ed25519')) {
                obj['sig_verify_cost_ed25519'] = ApiClient.convertToType(data['sig_verify_cost_ed25519'], 'String');
            }
            if (data.hasOwnProperty('sig_verify_cost_secp256k1')) {
                obj['sig_verify_cost_secp256k1'] = ApiClient.convertToType(data['sig_verify_cost_secp256k1'], 'String');
            }
            if (data.hasOwnProperty('min_gas_price_limit')) {
                obj['min_gas_price_limit'] = ApiClient.convertToType(data['min_gas_price_limit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} max_memo_characters
 */
InlineResponse20034Result.prototype['max_memo_characters'] = undefined;

/**
 * @member {String} tx_sig_limit
 */
InlineResponse20034Result.prototype['tx_sig_limit'] = undefined;

/**
 * @member {String} tx_size_cost_per_byte
 */
InlineResponse20034Result.prototype['tx_size_cost_per_byte'] = undefined;

/**
 * @member {String} sig_verify_cost_ed25519
 */
InlineResponse20034Result.prototype['sig_verify_cost_ed25519'] = undefined;

/**
 * @member {String} sig_verify_cost_secp256k1
 */
InlineResponse20034Result.prototype['sig_verify_cost_secp256k1'] = undefined;

/**
 * @member {String} min_gas_price_limit
 */
InlineResponse20034Result.prototype['min_gas_price_limit'] = undefined;






export default InlineResponse20034Result;

