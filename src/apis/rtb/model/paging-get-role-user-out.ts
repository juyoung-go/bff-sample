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


import { GetRoleUserOut } from './get-role-user-out';

/**
 * 
 * @export
 * @interface PagingGetRoleUserOut
 */
export interface PagingGetRoleUserOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetRoleUserOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetRoleUserOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetRoleUserOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetRoleUserOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetRoleUserOut>}
     * @memberof PagingGetRoleUserOut
     */
    'list': Array<GetRoleUserOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetRoleUserOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetRoleUserOut
     */
    'total': number;
}

