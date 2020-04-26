/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Coin from './Coin';
import ValidatorAddress from './ValidatorAddress';

/**
* The ValidatorDistInfo model module.
* @module model/ValidatorDistInfo
* @version 3.0
*/
export default class ValidatorDistInfo {
    /**
    * Constructs a new <code>ValidatorDistInfo</code>.
    * @alias module:model/ValidatorDistInfo
    * @class
    * @param operatorAddress {module:model/ValidatorAddress} 
    * @param selfBondRewards {Array.<module:model/Coin>} 
    * @param valCommission {Array.<module:model/Coin>} 
    */

    constructor(operatorAddress, selfBondRewards, valCommission) {
        
        
        this['operator_address'] = operatorAddress;
        this['self_bond_rewards'] = selfBondRewards;
        this['val_commission'] = valCommission;
        
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
                obj['operator_address'] = ValidatorAddress.constructFromObject(data['operator_address']);
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

    /**
    * @member {module:model/ValidatorAddress} operator_address
    */
    operator_address = undefined;
    /**
    * @member {Array.<module:model/Coin>} self_bond_rewards
    */
    self_bond_rewards = undefined;
    /**
    * @member {Array.<module:model/Coin>} val_commission
    */
    val_commission = undefined;




}