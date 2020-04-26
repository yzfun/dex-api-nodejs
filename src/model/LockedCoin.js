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

/**
* The LockedCoin model module.
* @module model/LockedCoin
* @version 3.0
*/
export default class LockedCoin {
    /**
    * Constructs a new <code>LockedCoin</code>.
    * @alias module:model/LockedCoin
    * @class
    * @param coin {module:model/Coin} 
    * @param unlockTime {String} 
    */

    constructor(coin, unlockTime) {
        
        
        this['coin'] = coin;
        this['unlock_time'] = unlockTime;
        
    }

    /**
    * Constructs a <code>LockedCoin</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LockedCoin} obj Optional instance to populate.
    * @return {module:model/LockedCoin} The populated <code>LockedCoin</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LockedCoin();
                        
            
            if (data.hasOwnProperty('coin')) {
                obj['coin'] = Coin.constructFromObject(data['coin']);
            }
            if (data.hasOwnProperty('unlock_time')) {
                obj['unlock_time'] = ApiClient.convertToType(data['unlock_time'], 'String');
            }
            if (data.hasOwnProperty('from_address')) {
                obj['from_address'] = ApiClient.convertToType(data['from_address'], 'String');
            }
            if (data.hasOwnProperty('supervisor')) {
                obj['supervisor'] = ApiClient.convertToType(data['supervisor'], 'String');
            }
            if (data.hasOwnProperty('reward')) {
                obj['reward'] = ApiClient.convertToType(data['reward'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Coin} coin
    */
    coin = undefined;
    /**
    * @member {String} unlock_time
    */
    unlock_time = undefined;
    /**
    * @member {String} from_address
    */
    from_address = undefined;
    /**
    * @member {String} supervisor
    */
    supervisor = undefined;
    /**
    * @member {String} reward
    */
    reward = undefined;




}