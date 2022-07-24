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


import { GetLwhTypeOut } from './get-lwh-type-out';

/**
 * 
 * @export
 * @interface PagingGetLwhTypeOut
 */
export interface PagingGetLwhTypeOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhTypeOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhTypeOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhTypeOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhTypeOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetLwhTypeOut>}
     * @memberof PagingGetLwhTypeOut
     */
    'list': Array<GetLwhTypeOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetLwhTypeOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhTypeOut
     */
    'total': number;
}

