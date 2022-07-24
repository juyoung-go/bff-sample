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


import { GetAllBkliListOut } from './get-all-bkli-list-out';

/**
 * 
 * @export
 * @interface PagingGetAllBkliListOut
 */
export interface PagingGetAllBkliListOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetAllBkliListOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetAllBkliListOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetAllBkliListOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetAllBkliListOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetAllBkliListOut>}
     * @memberof PagingGetAllBkliListOut
     */
    'list': Array<GetAllBkliListOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetAllBkliListOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetAllBkliListOut
     */
    'total': number;
}

