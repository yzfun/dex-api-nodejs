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
 * The Delegation model module.
 * @module model/Delegation
 * @version 3.0
 */
class Delegation {
    /**
     * Constructs a new <code>Delegation</code>.
     * @alias module:model/Delegation
     * @param delegatorAddress {String} 
     * @param validatorAddress {String} 
     * @param shares {String} 
     * @param balance {String} 
     */
    constructor(delegatorAddress, validatorAddress, shares, balance) { 
        
        Delegation.initialize(this, delegatorAddress, validatorAddress, shares, balance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, delegatorAddress, validatorAddress, shares, balance) { 
        obj['delegator_address'] = delegatorAddress;
        obj['validator_address'] = validatorAddress;
        obj['shares'] = shares;
        obj['balance'] = balance;
    }

    /**
     * Constructs a <code>Delegation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Delegation} obj Optional instance to populate.
     * @return {module:model/Delegation} The populated <code>Delegation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Delegation();

            if (data.hasOwnProperty('delegator_address')) {
                obj['delegator_address'] = ApiClient.convertToType(data['delegator_address'], 'String');
            }
            if (data.hasOwnProperty('validator_address')) {
                obj['validator_address'] = ApiClient.convertToType(data['validator_address'], 'String');
            }
            if (data.hasOwnProperty('shares')) {
                obj['shares'] = ApiClient.convertToType(data['shares'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} delegator_address
 */
Delegation.prototype['delegator_address'] = undefined;

/**
 * @member {String} validator_address
 */
Delegation.prototype['validator_address'] = undefined;

/**
 * @member {String} shares
 */
Delegation.prototype['shares'] = undefined;

/**
 * @member {String} balance
 */
Delegation.prototype['balance'] = undefined;






export default Delegation;

