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


import { GetBoeFrontOut } from './get-boe-front-out';

/**
 * 
 * @export
 * @interface PagingGetBoeFrontOut
 */
export interface PagingGetBoeFrontOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBoeFrontOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBoeFrontOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBoeFrontOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBoeFrontOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetBoeFrontOut>}
     * @memberof PagingGetBoeFrontOut
     */
    'list': Array<GetBoeFrontOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetBoeFrontOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBoeFrontOut
     */
    'total': number;
}

