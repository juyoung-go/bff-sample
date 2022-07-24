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


import { GetBldOut } from './get-bld-out';

/**
 * 
 * @export
 * @interface PagingGetBldOut
 */
export interface PagingGetBldOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBldOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBldOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBldOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetBldOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetBldOut>}
     * @memberof PagingGetBldOut
     */
    'list': Array<GetBldOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetBldOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetBldOut
     */
    'total': number;
}

