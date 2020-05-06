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
import Coin from './Coin';

/**
 * The ValidatorDistInfo model module.
 * @module model/ValidatorDistInfo
 * @version 3.0
 */
class ValidatorDistInfo {
    /**
     * Constructs a new <code>ValidatorDistInfo</code>.
     * @alias module:model/ValidatorDistInfo
     * @param operatorAddress {String} bech32 encoded address
     * @param selfBondRewards {Array.<module:model/Coin>} 
     * @param valCommission {Array.<module:model/Coin>} 
     */
    constructor(operatorAddress, selfBondRewards, valCommission) { 
        
        ValidatorDistInfo.initialize(this, operatorAddress, selfBondRewards, valCommission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operatorAddress, selfBondRewards, valCommission) { 
        obj['operator_address'] = operatorAddress;
        obj['self_bond_rewards'] = selfBondRewards;
        obj['val_commission'] = valCommission;
    }

    /**
     * Constructs a <code>ValidatorDistInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidatorDistInfo} obj Optional instance to populate.
     * @return {module:model/ValidatorDistInfo} The populated <code>ValidatorDistInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidatorDistInfo();

            if (data.hasOwnProperty('operator_address')) {
                obj['operator_address'] = ApiClient.convertToType(data['operator_address'], 'String');
            }
            if (data.hasOwnProperty('self_bond_rewards')) {
                obj['self_bond_rewards'] = ApiClient.convertToType(data['self_bond_rewards'], [Coin]);
            }
            if (data.hasOwnProperty('val_commission')) {
                obj['val_commission'] = ApiClient.convertToType(data['val_commission'], [Coin]);
            }
        }
        return obj;
    }


}

/**
 * bech32 encoded address
 * @member {String} operator_address
 */
ValidatorDistInfo.prototype['operator_address'] = undefined;

/**
 * @member {Array.<module:model/Coin>} self_bond_rewards
 */
ValidatorDistInfo.prototype['self_bond_rewards'] = undefined;

/**
 * @member {Array.<module:model/Coin>} val_commission
 */
ValidatorDistInfo.prototype['val_commission'] = undefined;






export default ValidatorDistInfo;

