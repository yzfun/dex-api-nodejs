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
 * The DelegationDelegatorReward model module.
 * @module model/DelegationDelegatorReward
 * @version 3.0
 */
class DelegationDelegatorReward {
    /**
     * Constructs a new <code>DelegationDelegatorReward</code>.
     * @alias module:model/DelegationDelegatorReward
     * @param validatorAddress {String} bech32 encoded address
     * @param reward {Array.<module:model/Coin>} 
     */
    constructor(validatorAddress, reward) { 
        
        DelegationDelegatorReward.initialize(this, validatorAddress, reward);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, validatorAddress, reward) { 
        obj['validator_address'] = validatorAddress;
        obj['reward'] = reward;
    }

    /**
     * Constructs a <code>DelegationDelegatorReward</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DelegationDelegatorReward} obj Optional instance to populate.
     * @return {module:model/DelegationDelegatorReward} The populated <code>DelegationDelegatorReward</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DelegationDelegatorReward();

            if (data.hasOwnProperty('validator_address')) {
                obj['validator_address'] = ApiClient.convertToType(data['validator_address'], 'String');
            }
            if (data.hasOwnProperty('reward')) {
                obj['reward'] = ApiClient.convertToType(data['reward'], [Coin]);
            }
        }
        return obj;
    }


}

/**
 * bech32 encoded address
 * @member {String} validator_address
 */
DelegationDelegatorReward.prototype['validator_address'] = undefined;

/**
 * @member {Array.<module:model/Coin>} reward
 */
DelegationDelegatorReward.prototype['reward'] = undefined;






export default DelegationDelegatorReward;
