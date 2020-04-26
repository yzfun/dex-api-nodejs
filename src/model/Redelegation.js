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
import RedelegationEntry from './RedelegationEntry';

/**
* The Redelegation model module.
* @module model/Redelegation
* @version 3.0
*/
export default class Redelegation {
    /**
    * Constructs a new <code>Redelegation</code>.
    * @alias module:model/Redelegation
    * @class
    * @param delegatorAddress {String} 
    * @param validatorSrcAddress {String} 
    * @param validatorDstAddress {String} 
    * @param entries {Array.<module:model/RedelegationEntry>} 
    */

    constructor(delegatorAddress, validatorSrcAddress, validatorDstAddress, entries) {
        
        
        this['delegator_address'] = delegatorAddress;
        this['validator_src_address'] = validatorSrcAddress;
        this['validator_dst_address'] = validatorDstAddress;
        this['entries'] = entries;
        
    }

    /**
    * Constructs a <code>Redelegation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Redelegation} obj Optional instance to populate.
    * @return {module:model/Redelegation} The populated <code>Redelegation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Redelegation();
                        
            
            if (data.hasOwnProperty('delegator_address')) {
                obj['delegator_address'] = ApiClient.convertToType(data['delegator_address'], 'String');
            }
            if (data.hasOwnProperty('validator_src_address')) {
                obj['validator_src_address'] = ApiClient.convertToType(data['validator_src_address'], 'String');
            }
            if (data.hasOwnProperty('validator_dst_address')) {
                obj['validator_dst_address'] = ApiClient.convertToType(data['validator_dst_address'], 'String');
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [RedelegationEntry]);
            }
        }
        return obj;
    }

    /**
    * @member {String} delegator_address
    */
    delegator_address = undefined;
    /**
    * @member {String} validator_src_address
    */
    validator_src_address = undefined;
    /**
    * @member {String} validator_dst_address
    */
    validator_dst_address = undefined;
    /**
    * @member {Array.<module:model/RedelegationEntry>} entries
    */
    entries = undefined;




}