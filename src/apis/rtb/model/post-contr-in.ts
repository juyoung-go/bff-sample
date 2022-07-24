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


import { GetPmtInfo } from './get-pmt-info';
import { GetPtbInfo } from './get-ptb-info';

/**
 * 
 * @export
 * @interface PostContrIn
 */
export interface PostContrIn {
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'dealId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'ldealId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'contrTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'contrNum'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'dealInflCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'prdId'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'glaPy'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'glaM2'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'nlaPy'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'nlaM2'?: number;
    /**
     * 
     * @type {Array<GetPtbInfo>}
     * @memberof PostContrIn
     */
    'contrRentPtb'?: Array<GetPtbInfo>;
    /**
     * 
     * @type {Array<GetPtbInfo>}
     * @memberof PostContrIn
     */
    'contrLeasePtb'?: Array<GetPtbInfo>;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'contrDy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'contrAmt'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'contrPmtExpectDy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'contrPmtAmt'?: number;
    /**
     * 
     * @type {Array<GetPmtInfo>}
     * @memberof PostContrIn
     */
    'midPmtList'?: Array<GetPmtInfo>;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'balancePmtExpectDy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'balancePmtAmt'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'contrStartDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'contrEndDy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'dpstAmt'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'rentPayDd'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'rentPayTypeCd'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'rentAmt'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'maintFeeIncldYn'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'maintFeePayDd'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'maintFeeAmt'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'maintFeePayTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'intDtl'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'notiTermMonth'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'spcContrCtn'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostContrIn
     */
    'recIncldYn'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostContrIn
     */
    'premiumAmt'?: number;
}

