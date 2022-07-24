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


import { GetContrByWorkIdForClnOut } from './get-contr-by-work-id-for-cln-out';

/**
 * 
 * @export
 * @interface GetClnLeaseDealTaskOut
 */
export interface GetClnLeaseDealTaskOut {
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'bldId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'cmplDt'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetClnLeaseDealTaskOut
     */
    'contrCnt': number;
    /**
     * 
     * @type {Array<GetContrByWorkIdForClnOut>}
     * @memberof GetClnLeaseDealTaskOut
     */
    'contrs': Array<GetContrByWorkIdForClnOut>;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'dealClnRel'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'dealStat'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'dealStatCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'mptbUserName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'taskId': string;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'taskName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetClnLeaseDealTaskOut
     */
    'taskRegDy'?: string;
}

