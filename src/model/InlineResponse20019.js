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
import TextProposal from './TextProposal';

/**
 * The InlineResponse20019 model module.
 * @module model/InlineResponse20019
 * @version 3.0
 */
class InlineResponse20019 {
    /**
     * Constructs a new <code>InlineResponse20019</code>.
     * @alias module:model/InlineResponse20019
     */
    constructor() { 
        
        InlineResponse20019.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20019} obj Optional instance to populate.
     * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20019();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = TextProposal.constructFromObject(data['result']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} height
 */
InlineResponse20019.prototype['height'] = undefined;

/**
 * @member {module:model/TextProposal} result
 */
InlineResponse20019.prototype['result'] = undefined;






export default InlineResponse20019;

