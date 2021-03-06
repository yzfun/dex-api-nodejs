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
import BaseReq from './BaseReq';
import Coin from './Coin';

/**
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 3.0
 */
class InlineObject3 {
    /**
     * Constructs a new <code>InlineObject3</code>.
     * @alias module:model/InlineObject3
     * @param baseReq {module:model/BaseReq} 
     * @param amount {module:model/Coin} 
     * @param unlockTime {String} 
     * @param operation {Number} Operation type (create: 0; return: 1; unlock-by-sender: 2; unlock-by-supervisor: 3)
     */
    constructor(baseReq, amount, unlockTime, operation) { 
        
        InlineObject3.initialize(this, baseReq, amount, unlockTime, operation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseReq, amount, unlockTime, operation) { 
        obj['base_req'] = baseReq;
        obj['amount'] = amount;
        obj['unlock_time'] = unlockTime;
        obj['operation'] = operation;
    }

    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject3();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = Coin.constructFromObject(data['amount']);
            }
            if (data.hasOwnProperty('unlock_time')) {
                obj['unlock_time'] = ApiClient.convertToType(data['unlock_time'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('supervisor')) {
                obj['supervisor'] = ApiClient.convertToType(data['supervisor'], 'String');
            }
            if (data.hasOwnProperty('reward')) {
                obj['reward'] = ApiClient.convertToType(data['reward'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject3.prototype['base_req'] = undefined;

/**
 * @member {module:model/Coin} amount
 */
InlineObject3.prototype['amount'] = undefined;

/**
 * @member {String} unlock_time
 */
InlineObject3.prototype['unlock_time'] = undefined;

/**
 * The supervised amount sender's address (required when return or unlock-by-supervisor)
 * @member {String} sender
 */
InlineObject3.prototype['sender'] = undefined;

/**
 * The supervisor's address (required when create or unlock-by-sender if there is a supervisor)
 * @member {String} supervisor
 */
InlineObject3.prototype['supervisor'] = undefined;

/**
 * @member {String} reward
 */
InlineObject3.prototype['reward'] = undefined;

/**
 * Operation type (create: 0; return: 1; unlock-by-sender: 2; unlock-by-supervisor: 3)
 * @member {Number} operation
 */
InlineObject3.prototype['operation'] = undefined;






export default InlineObject3;

