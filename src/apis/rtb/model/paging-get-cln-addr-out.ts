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


import { GetClnAddrOut } from './get-cln-addr-out';

/**
 * 
 * @export
 * @interface PagingGetClnAddrOut
 */
export interface PagingGetClnAddrOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnAddrOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnAddrOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnAddrOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnAddrOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetClnAddrOut>}
     * @memberof PagingGetClnAddrOut
     */
    'list': Array<GetClnAddrOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetClnAddrOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnAddrOut
     */
    'total': number;
}

