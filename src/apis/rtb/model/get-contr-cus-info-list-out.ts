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


import { GetCusConListOut } from './get-cus-con-list-out';
import { GetCusEmailListOut } from './get-cus-email-list-out';

/**
 * 
 * @export
 * @interface GetContrCusInfoListOut
 */
export interface GetContrCusInfoListOut {
    /**
     * 
     * @type {string}
     * @memberof GetContrCusInfoListOut
     */
    'clnId': string;
    /**
     * 
     * @type {Array<GetCusConListOut>}
     * @memberof GetContrCusInfoListOut
     */
    'con': Array<GetCusConListOut>;
    /**
     * 
     * @type {string}
     * @memberof GetContrCusInfoListOut
     */
    'contrCusRelType'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetContrCusInfoListOut
     */
    'contrCusRelTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetContrCusInfoListOut
     */
    'cusId': string;
    /**
     * 
     * @type {string}
     * @memberof GetContrCusInfoListOut
     */
    'cusName'?: string;
    /**
     * 
     * @type {Array<GetCusEmailListOut>}
     * @memberof GetContrCusInfoListOut
     */
    'email': Array<GetCusEmailListOut>;
    /**
     * 
     * @type {string}
     * @memberof GetContrCusInfoListOut
     */
    'nonuResn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetContrCusInfoListOut
     */
    'taxPtbYn'?: string;
}

