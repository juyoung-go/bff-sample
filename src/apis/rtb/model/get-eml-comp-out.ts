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



/**
 * 
 * @export
 * @interface GetEmlCompOut
 */
export interface GetEmlCompOut {
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'createDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'emailProcStatCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'emailProcStatName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'emailSbj'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'emailSentId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'emailTmplId'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetEmlCompOut
     */
    'failCnt': number;
    /**
     * 
     * @type {number}
     * @memberof GetEmlCompOut
     */
    'linkClickCnt': number;
    /**
     * 
     * @type {number}
     * @memberof GetEmlCompOut
     */
    'rcvCnt': number;
    /**
     * 
     * @type {number}
     * @memberof GetEmlCompOut
     */
    'rcvrEmailCnt': number;
    /**
     * 
     * @type {number}
     * @memberof GetEmlCompOut
     */
    'readCnt': number;
    /**
     * 
     * @type {number}
     * @memberof GetEmlCompOut
     */
    'sendCnt': number;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'sendComp'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'sendReq'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'sendUserId': string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'sendUserName': string;
    /**
     * 
     * @type {string}
     * @memberof GetEmlCompOut
     */
    'senderEmail': string;
}

