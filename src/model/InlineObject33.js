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
 * The InlineObject33 model module.
 * @module model/InlineObject33
 * @version 3.0
 */
class InlineObject33 {
    /**
     * Constructs a new <code>InlineObject33</code>.
     * @alias module:model/InlineObject33
     * @param baseReq {module:model/BaseReq} 
     * @param stock {String} 
     * @param money {String} 
     * @param initPrice {String} 
     * @param maxSupply {String} 
     * @param maxPrice {String} 
     * @param maxMoney {String} 
     * @param earliestCancelTime {String} 
     */
    constructor(baseReq, stock, money, initPrice, maxSupply, maxPrice, maxMoney, earliestCancelTime) { 
        
        InlineObject33.initialize(this, baseReq, stock, money, initPrice, maxSupply, maxPrice, maxMoney, earliestCancelTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseReq, stock, money, initPrice, maxSupply, maxPrice, maxMoney, earliestCancelTime) { 
        obj['base_req'] = baseReq;
        obj['stock'] = stock;
        obj['money'] = money;
        obj['init_price'] = initPrice;
        obj['max_supply'] = maxSupply;
        obj['max_price'] = maxPrice;
        obj['max_money'] = maxMoney;
        obj['earliest_cancel_time'] = earliestCancelTime;
    }

    /**
     * Constructs a <code>InlineObject33</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject33} obj Optional instance to populate.
     * @return {module:model/InlineObject33} The populated <code>InlineObject33</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject33();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'String');
            }
            if (data.hasOwnProperty('money')) {
                obj['money'] = ApiClient.convertToType(data['money'], 'String');
            }
            if (data.hasOwnProperty('init_price')) {
                obj['init_price'] = ApiClient.convertToType(data['init_price'], 'String');
            }
            if (data.hasOwnProperty('max_supply')) {
                obj['max_supply'] = ApiClient.convertToType(data['max_supply'], 'String');
            }
            if (data.hasOwnProperty('stock_precision')) {
                obj['stock_precision'] = ApiClient.convertToType(data['stock_precision'], 'String');
            }
            if (data.hasOwnProperty('max_price')) {
                obj['max_price'] = ApiClient.convertToType(data['max_price'], 'String');
            }
            if (data.hasOwnProperty('max_money')) {
                obj['max_money'] = ApiClient.convertToType(data['max_money'], 'String');
            }
            if (data.hasOwnProperty('earliest_cancel_time')) {
                obj['earliest_cancel_time'] = ApiClient.convertToType(data['earliest_cancel_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject33.prototype['base_req'] = undefined;

/**
 * @member {String} stock
 */
InlineObject33.prototype['stock'] = undefined;

/**
 * @member {String} money
 */
InlineObject33.prototype['money'] = undefined;

/**
 * @member {String} init_price
 */
InlineObject33.prototype['init_price'] = undefined;

/**
 * @member {String} max_supply
 */
InlineObject33.prototype['max_supply'] = undefined;

/**
 * @member {String} stock_precision
 */
InlineObject33.prototype['stock_precision'] = undefined;

/**
 * @member {String} max_price
 */
InlineObject33.prototype['max_price'] = undefined;

/**
 * @member {String} max_money
 */
InlineObject33.prototype['max_money'] = undefined;

/**
 * @member {String} earliest_cancel_time
 */
InlineObject33.prototype['earliest_cancel_time'] = undefined;






export default InlineObject33;

