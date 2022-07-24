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


import { GetClnRelCcalListOut } from './get-cln-rel-ccal-list-out';

/**
 * 
 * @export
 * @interface PagingClnCcalOut
 */
export interface PagingClnCcalOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingClnCcalOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingClnCcalOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingClnCcalOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingClnCcalOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetClnRelCcalListOut>}
     * @memberof PagingClnCcalOut
     */
    'list': Array<GetClnRelCcalListOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingClnCcalOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'sumFeeAmt': number;
    /**
     * 
     * @type {number}
     * @memberof PagingClnCcalOut
     */
    'total': number;
}

