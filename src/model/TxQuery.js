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
import StdTx from './StdTx';
import TxQueryResult from './TxQueryResult';

/**
 * The TxQuery model module.
 * @module model/TxQuery
 * @version 3.0
 */
class TxQuery {
    /**
     * Constructs a new <code>TxQuery</code>.
     * @alias module:model/TxQuery
     */
    constructor() { 
        
        TxQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TxQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TxQuery} obj Optional instance to populate.
     * @return {module:model/TxQuery} The populated <code>TxQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TxQuery();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('tx')) {
                obj['tx'] = StdTx.constructFromObject(data['tx']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = TxQueryResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} hash
 */
TxQuery.prototype['hash'] = undefined;

/**
 * @member {String} height
 */
TxQuery.prototype['height'] = undefined;

/**
 * @member {module:model/StdTx} tx
 */
TxQuery.prototype['tx'] = undefined;

/**
 * @member {module:model/TxQueryResult} result
 */
TxQuery.prototype['result'] = undefined;






export default TxQuery;
