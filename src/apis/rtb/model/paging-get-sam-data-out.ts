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


import { GetSamDataOut } from './get-sam-data-out';

/**
 * 
 * @export
 * @interface PagingGetSamDataOut
 */
export interface PagingGetSamDataOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSamDataOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSamDataOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSamDataOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSamDataOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetSamDataOut>}
     * @memberof PagingGetSamDataOut
     */
    'list': Array<GetSamDataOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetSamDataOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSamDataOut
     */
    'total': number;
}

