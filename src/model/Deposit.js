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
 * The Deposit model module.
 * @module model/Deposit
 * @version 3.0
 */
class Deposit {
    /**
     * Constructs a new <code>Deposit</code>.
     * @alias module:model/Deposit
     * @param amount {Array.<module:model/Coin>} 
     * @param proposalId {String} 
     * @param depositor {String} bech32 encoded address
     */
    constructor(amount, proposalId, depositor) { 
        
        Deposit.initialize(this, amount, proposalId, depositor);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, proposalId, depositor) { 
        obj['amount'] = amount;
        obj['proposal_id'] = proposalId;
        obj['depositor'] = depositor;
    }

    /**
     * Constructs a <code>Deposit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deposit} obj Optional instance to populate.
     * @return {module:model/Deposit} The populated <code>Deposit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deposit();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], [Coin]);
            }
            if (data.hasOwnProperty('proposal_id')) {
                obj['proposal_id'] = ApiClient.convertToType(data['proposal_id'], 'String');
            }
            if (data.hasOwnProperty('depositor')) {
                obj['depositor'] = ApiClient.convertToType(data['depositor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Coin>} amount
 */
Deposit.prototype['amount'] = undefined;

/**
 * @member {String} proposal_id
 */
Deposit.prototype['proposal_id'] = undefined;

/**
 * bech32 encoded address
 * @member {String} depositor
 */
Deposit.prototype['depositor'] = undefined;






export default Deposit;

