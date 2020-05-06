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
import ValidatorCommission from './ValidatorCommission';
import ValidatorDescription from './ValidatorDescription';

/**
 * The Validator model module.
 * @module model/Validator
 * @version 3.0
 */
class Validator {
    /**
     * Constructs a new <code>Validator</code>.
     * @alias module:model/Validator
     * @param operatorAddress {String} bech32 encoded address
     * @param consensusPubkey {String} 
     * @param jailed {Boolean} 
     * @param status {Number} 
     * @param tokens {String} 
     * @param delegatorShares {String} 
     * @param description {module:model/ValidatorDescription} 
     * @param unbondingHeight {String} 
     * @param unbondingTime {String} 
     * @param commission {module:model/ValidatorCommission} 
     * @param minSelfDelegation {String} 
     */
    constructor(operatorAddress, consensusPubkey, jailed, status, tokens, delegatorShares, description, unbondingHeight, unbondingTime, commission, minSelfDelegation) { 
        
        Validator.initialize(this, operatorAddress, consensusPubkey, jailed, status, tokens, delegatorShares, description, unbondingHeight, unbondingTime, commission, minSelfDelegation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operatorAddress, consensusPubkey, jailed, status, tokens, delegatorShares, description, unbondingHeight, unbondingTime, commission, minSelfDelegation) { 
        obj['operator_address'] = operatorAddress;
        obj['consensus_pubkey'] = consensusPubkey;
        obj['jailed'] = jailed;
        obj['status'] = status;
        obj['tokens'] = tokens;
        obj['delegator_shares'] = delegatorShares;
        obj['description'] = description;
        obj['unbonding_height'] = unbondingHeight;
        obj['unbonding_time'] = unbondingTime;
        obj['commission'] = commission;
        obj['min_self_delegation'] = minSelfDelegation;
    }

    /**
     * Constructs a <code>Validator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Validator} obj Optional instance to populate.
     * @return {module:model/Validator} The populated <code>Validator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Validator();

            if (data.hasOwnProperty('operator_address')) {
                obj['operator_address'] = ApiClient.convertToType(data['operator_address'], 'String');
            }
            if (data.hasOwnProperty('consensus_pubkey')) {
                obj['consensus_pubkey'] = ApiClient.convertToType(data['consensus_pubkey'], 'String');
            }
            if (data.hasOwnProperty('jailed')) {
                obj['jailed'] = ApiClient.convertToType(data['jailed'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], 'String');
            }
            if (data.hasOwnProperty('delegator_shares')) {
                obj['delegator_shares'] = ApiClient.convertToType(data['delegator_shares'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ValidatorDescription.constructFromObject(data['description']);
            }
            if (data.hasOwnProperty('unbonding_height')) {
                obj['unbonding_height'] = ApiClient.convertToType(data['unbonding_height'], 'String');
            }
            if (data.hasOwnProperty('unbonding_time')) {
                obj['unbonding_time'] = ApiClient.convertToType(data['unbonding_time'], 'String');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ValidatorCommission.constructFromObject(data['commission']);
            }
            if (data.hasOwnProperty('min_self_delegation')) {
                obj['min_self_delegation'] = ApiClient.convertToType(data['min_self_delegation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * bech32 encoded address
 * @member {String} operator_address
 */
Validator.prototype['operator_address'] = undefined;

/**
 * @member {String} consensus_pubkey
 */
Validator.prototype['consensus_pubkey'] = undefined;

/**
 * @member {Boolean} jailed
 */
Validator.prototype['jailed'] = undefined;

/**
 * @member {Number} status
 */
Validator.prototype['status'] = undefined;

/**
 * @member {String} tokens
 */
Validator.prototype['tokens'] = undefined;

/**
 * @member {String} delegator_shares
 */
Validator.prototype['delegator_shares'] = undefined;

/**
 * @member {module:model/ValidatorDescription} description
 */
Validator.prototype['description'] = undefined;

/**
 * @member {String} unbonding_height
 */
Validator.prototype['unbonding_height'] = undefined;

/**
 * @member {String} unbonding_time
 */
Validator.prototype['unbonding_time'] = undefined;

/**
 * @member {module:model/ValidatorCommission} commission
 */
Validator.prototype['commission'] = undefined;

/**
 * @member {String} min_self_delegation
 */
Validator.prototype['min_self_delegation'] = undefined;






export default Validator;

