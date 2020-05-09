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
 * The TransferRecord model module.
 * @module model/TransferRecord
 * @version 3.0
 */
class TransferRecord {
    /**
     * Constructs a new <code>TransferRecord</code>.
     * @alias module:model/TransferRecord
     */
    constructor() { 
        
        TransferRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransferRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferRecord} obj Optional instance to populate.
     * @return {module:model/TransferRecord} The populated <code>TransferRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferRecord();

            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * bech32 encoded address
 * @member {String} sender
 */
TransferRecord.prototype['sender'] = undefined;

/**
 * bech32 encoded address
 * @member {String} recipient
 */
TransferRecord.prototype['recipient'] = undefined;

/**
 * @member {String} amount
 */
TransferRecord.prototype['amount'] = undefined;






export default TransferRecord;

