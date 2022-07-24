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


import { GetRentCdtDtlOut } from './get-rent-cdt-dtl-out';

/**
 * 
 * @export
 * @interface GetRentCdtOut
 */
export interface GetRentCdtOut {
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'bldId': string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'createDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'createUserName'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRentCdtOut
     */
    'fitoutMonth'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRentCdtOut
     */
    'fitoutMtnFeeMonth'?: number;
    /**
     * 
     * @type {Array<GetRentCdtDtlOut>}
     * @memberof GetRentCdtOut
     */
    'flrList': Array<GetRentCdtDtlOut>;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'ptbConNum'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'ptbConTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'ptbName'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetRentCdtOut
     */
    'rentCdtSeq': number;
    /**
     * 
     * @type {number}
     * @memberof GetRentCdtOut
     */
    'rentfreeMonth'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'rschCoName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'tiDtl'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'updateDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'updateUserName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentCdtOut
     */
    'useYn'?: string;
}

