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


import { GetLwhUnitForModalOut } from './get-lwh-unit-for-modal-out';

/**
 * 
 * @export
 * @interface PagingGetLwhUnitForModalOut
 */
export interface PagingGetLwhUnitForModalOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetLwhUnitForModalOut>}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'list': Array<GetLwhUnitForModalOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhUnitForModalOut
     */
    'total': number;
}

