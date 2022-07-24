/* tslint:disable */
/* eslint-disable */
/**
 * Rsquare Manage Server
 * Api Document
 *
 * The version of the OpenAPI document: V22.20.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GetStregListOut } from './get-streg-list-out';

/**
 * 
 * @export
 * @interface PagingGetStregListOut
 */
export interface PagingGetStregListOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetStregListOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetStregListOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetStregListOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetStregListOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetStregListOut>}
     * @memberof PagingGetStregListOut
     */
    'list': Array<GetStregListOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetStregListOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetStregListOut
     */
    'total': number;
}

