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

/**
 * The InlineObject34 model module.
 * @module model/InlineObject34
 * @version 3.0
 */
class InlineObject34 {
    /**
     * Constructs a new <code>InlineObject34</code>.
     * @alias module:model/InlineObject34
     * @param baseReq {module:model/BaseReq} 
     * @param stock {String} 
     * @param money {String} 
     * @param amount {String} 
     * @param isBuy {Boolean} 
     * @param moneyLimit {String} 
     */
    constructor(baseReq, stock, money, amount, isBuy, moneyLimit) { 
        
        InlineObject34.initialize(this, baseReq, stock, money, amount, isBuy, moneyLimit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseReq, stock, money, amount, isBuy, moneyLimit) { 
        obj['base_req'] = baseReq;
        obj['stock'] = stock;
        obj['money'] = money;
        obj['amount'] = amount;
        obj['is_buy'] = isBuy;
        obj['money_limit'] = moneyLimit;
    }

    /**
     * Constructs a <code>InlineObject34</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject34} obj Optional instance to populate.
     * @return {module:model/InlineObject34} The populated <code>InlineObject34</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject34();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'String');
            }
            if (data.hasOwnProperty('money')) {
                obj['money'] = ApiClient.convertToType(data['money'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('is_buy')) {
                obj['is_buy'] = ApiClient.convertToType(data['is_buy'], 'Boolean');
            }
            if (data.hasOwnProperty('money_limit')) {
                obj['money_limit'] = ApiClient.convertToType(data['money_limit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject34.prototype['base_req'] = undefined;

/**
 * @member {String} stock
 */
InlineObject34.prototype['stock'] = undefined;

/**
 * @member {String} money
 */
InlineObject34.prototype['money'] = undefined;

/**
 * @member {String} amount
 */
InlineObject34.prototype['amount'] = undefined;

/**
 * @member {Boolean} is_buy
 */
InlineObject34.prototype['is_buy'] = undefined;

/**
 * @member {String} money_limit
 */
InlineObject34.prototype['money_limit'] = undefined;






export default InlineObject34;
