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


import { GetAddrMeta } from './get-addr-meta';
import { GetAddrNaverJuso } from './get-addr-naver-juso';

/**
 * 
 * @export
 * @interface GetAddrNaverOut
 */
export interface GetAddrNaverOut {
    /**
     * 
     * @type {Array<GetAddrNaverJuso>}
     * @memberof GetAddrNaverOut
     */
    'addresses': Array<GetAddrNaverJuso>;
    /**
     * 
     * @type {string}
     * @memberof GetAddrNaverOut
     */
    'errorMessage': string;
    /**
     * 
     * @type {GetAddrMeta}
     * @memberof GetAddrNaverOut
     */
    'meta': GetAddrMeta;
    /**
     * 
     * @type {string}
     * @memberof GetAddrNaverOut
     */
    'status': string;
}

