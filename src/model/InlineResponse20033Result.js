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
 * The InlineResponse20033Result model module.
 * @module model/InlineResponse20033Result
 * @version 3.0
 */
class InlineResponse20033Result {
    /**
     * Constructs a new <code>InlineResponse20033Result</code>.
     * @alias module:model/InlineResponse20033Result
     */
    constructor() { 
        
        InlineResponse20033Result.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20033Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20033Result} obj Optional instance to populate.
     * @return {module:model/InlineResponse20033Result} The populated <code>InlineResponse20033Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20033Result();

            if (data.hasOwnProperty('base_proposer_reward')) {
                obj['base_proposer_reward'] = ApiClient.convertToType(data['base_proposer_reward'], 'String');
            }
            if (data.hasOwnProperty('bonus_proposer_reward')) {
                obj['bonus_proposer_reward'] = ApiClient.convertToType(data['bonus_proposer_reward'], 'String');
            }
            if (data.hasOwnProperty('community_tax')) {
                obj['community_tax'] = ApiClient.convertToType(data['community_tax'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} base_proposer_reward
 */
InlineResponse20033Result.prototype['base_proposer_reward'] = undefined;

/**
 * @member {String} bonus_proposer_reward
 */
InlineResponse20033Result.prototype['bonus_proposer_reward'] = undefined;

/**
 * @member {String} community_tax
 */
InlineResponse20033Result.prototype['community_tax'] = undefined;






export default InlineResponse20033Result;

