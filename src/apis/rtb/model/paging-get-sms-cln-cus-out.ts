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


import { GetSmsClnCusOut } from './get-sms-cln-cus-out';

/**
 * 
 * @export
 * @interface PagingGetSmsClnCusOut
 */
export interface PagingGetSmsClnCusOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSmsClnCusOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSmsClnCusOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSmsClnCusOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSmsClnCusOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetSmsClnCusOut>}
     * @memberof PagingGetSmsClnCusOut
     */
    'list': Array<GetSmsClnCusOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetSmsClnCusOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSmsClnCusOut
     */
    'total': number;
}

