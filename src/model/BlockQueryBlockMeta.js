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
import BlockHeader from './BlockHeader';
import BlockID from './BlockID';

/**
 * The BlockQueryBlockMeta model module.
 * @module model/BlockQueryBlockMeta
 * @version 3.0
 */
class BlockQueryBlockMeta {
    /**
     * Constructs a new <code>BlockQueryBlockMeta</code>.
     * @alias module:model/BlockQueryBlockMeta
     */
    constructor() { 
        
        BlockQueryBlockMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlockQueryBlockMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockQueryBlockMeta} obj Optional instance to populate.
     * @return {module:model/BlockQueryBlockMeta} The populated <code>BlockQueryBlockMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockQueryBlockMeta();

            if (data.hasOwnProperty('header')) {
                obj['header'] = BlockHeader.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('block_id')) {
                obj['block_id'] = BlockID.constructFromObject(data['block_id']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BlockHeader} header
 */
BlockQueryBlockMeta.prototype['header'] = undefined;

/**
 * @member {module:model/BlockID} block_id
 */
BlockQueryBlockMeta.prototype['block_id'] = undefined;






export default BlockQueryBlockMeta;

