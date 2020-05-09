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
import InlineResponse20056 from './InlineResponse20056';
import UserOrderCancelOrderInfo from './UserOrderCancelOrderInfo';
import UserOrderCreateOrderInfo from './UserOrderCreateOrderInfo';

/**
 * The UserOrder model module.
 * @module model/UserOrder
 * @version 3.0
 */
class UserOrder {
    /**
     * Constructs a new <code>UserOrder</code>.
     * @alias module:model/UserOrder
     */
    constructor() { 
        
        UserOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserOrder} obj Optional instance to populate.
     * @return {module:model/UserOrder} The populated <code>UserOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserOrder();

            if (data.hasOwnProperty('createOrderInfo')) {
                obj['createOrderInfo'] = UserOrderCreateOrderInfo.constructFromObject(data['createOrderInfo']);
            }
            if (data.hasOwnProperty('fillOrderInfo')) {
                obj['fillOrderInfo'] = InlineResponse20056.constructFromObject(data['fillOrderInfo']);
            }
            if (data.hasOwnProperty('cancelOrderInfo')) {
                obj['cancelOrderInfo'] = UserOrderCancelOrderInfo.constructFromObject(data['cancelOrderInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserOrderCreateOrderInfo} createOrderInfo
 */
UserOrder.prototype['createOrderInfo'] = undefined;

/**
 * @member {module:model/InlineResponse20056} fillOrderInfo
 */
UserOrder.prototype['fillOrderInfo'] = undefined;

/**
 * @member {module:model/UserOrderCancelOrderInfo} cancelOrderInfo
 */
UserOrder.prototype['cancelOrderInfo'] = undefined;






export default UserOrder;

