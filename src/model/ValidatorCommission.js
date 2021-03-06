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
import ValidatorCommissionCommissionRates from './ValidatorCommissionCommissionRates';

/**
 * The ValidatorCommission model module.
 * @module model/ValidatorCommission
 * @version 3.0
 */
class ValidatorCommission {
    /**
     * Constructs a new <code>ValidatorCommission</code>.
     * @alias module:model/ValidatorCommission
     * @param commissionRates {module:model/ValidatorCommissionCommissionRates} 
     * @param updateTime {String} 
     */
    constructor(commissionRates, updateTime) { 
        
        ValidatorCommission.initialize(this, commissionRates, updateTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, commissionRates, updateTime) { 
        obj['commission_rates'] = commissionRates;
        obj['update_time'] = updateTime;
    }

    /**
     * Constructs a <code>ValidatorCommission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidatorCommission} obj Optional instance to populate.
     * @return {module:model/ValidatorCommission} The populated <code>ValidatorCommission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidatorCommission();

            if (data.hasOwnProperty('commission_rates')) {
                obj['commission_rates'] = ValidatorCommissionCommissionRates.constructFromObject(data['commission_rates']);
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ValidatorCommissionCommissionRates} commission_rates
 */
ValidatorCommission.prototype['commission_rates'] = undefined;

/**
 * @member {String} update_time
 */
ValidatorCommission.prototype['update_time'] = undefined;






export default ValidatorCommission;

