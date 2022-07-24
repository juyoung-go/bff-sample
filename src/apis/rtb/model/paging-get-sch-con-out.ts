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


import { GetSchConOut } from './get-sch-con-out';

/**
 * 
 * @export
 * @interface PagingGetSchConOut
 */
export interface PagingGetSchConOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSchConOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSchConOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSchConOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetSchConOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetSchConOut>}
     * @memberof PagingGetSchConOut
     */
    'list': Array<GetSchConOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetSchConOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetSchConOut
     */
    'total': number;
}

