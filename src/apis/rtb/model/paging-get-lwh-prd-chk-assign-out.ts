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


import { GetLwhPrdChkAssignOut } from './get-lwh-prd-chk-assign-out';

/**
 * 
 * @export
 * @interface PagingGetLwhPrdChkAssignOut
 */
export interface PagingGetLwhPrdChkAssignOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetLwhPrdChkAssignOut>}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'list': Array<GetLwhPrdChkAssignOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetLwhPrdChkAssignOut
     */
    'total': number;
}

