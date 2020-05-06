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

/**
 * The InlineResponse20036ResultPlans model module.
 * @module model/InlineResponse20036ResultPlans
 * @version 3.0
 */
class InlineResponse20036ResultPlans {
    /**
     * Constructs a new <code>InlineResponse20036ResultPlans</code>.
     * @alias module:model/InlineResponse20036ResultPlans
     */
    constructor() { 
        
        InlineResponse20036ResultPlans.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20036ResultPlans</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036ResultPlans} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036ResultPlans} The populated <code>InlineResponse20036ResultPlans</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20036ResultPlans();

            if (data.hasOwnProperty('start_height')) {
                obj['start_height'] = ApiClient.convertToType(data['start_height'], 'String');
            }
            if (data.hasOwnProperty('end_height')) {
                obj['end_height'] = ApiClient.convertToType(data['end_height'], 'String');
            }
            if (data.hasOwnProperty('reward_per_block')) {
                obj['reward_per_block'] = ApiClient.convertToType(data['reward_per_block'], 'String');
            }
            if (data.hasOwnProperty('total_incentive')) {
                obj['total_incentive'] = ApiClient.convertToType(data['total_incentive'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} start_height
 */
InlineResponse20036ResultPlans.prototype['start_height'] = undefined;

/**
 * @member {String} end_height
 */
InlineResponse20036ResultPlans.prototype['end_height'] = undefined;

/**
 * @member {String} reward_per_block
 */
InlineResponse20036ResultPlans.prototype['reward_per_block'] = undefined;

/**
 * @member {String} total_incentive
 */
InlineResponse20036ResultPlans.prototype['total_incentive'] = undefined;






export default InlineResponse20036ResultPlans;

