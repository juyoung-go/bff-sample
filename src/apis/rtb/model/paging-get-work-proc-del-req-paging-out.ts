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


import { GetWorkProcDelReqPagingOut } from './get-work-proc-del-req-paging-out';

/**
 * 
 * @export
 * @interface PagingGetWorkProcDelReqPagingOut
 */
export interface PagingGetWorkProcDelReqPagingOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetWorkProcDelReqPagingOut>}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'list': Array<GetWorkProcDelReqPagingOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetWorkProcDelReqPagingOut
     */
    'total': number;
}

