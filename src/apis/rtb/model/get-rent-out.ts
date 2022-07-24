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


import { GetSptbListByTaskIdOut } from './get-sptb-list-by-task-id-out';

/**
 * 
 * @export
 * @interface GetRentOut
 */
export interface GetRentOut {
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'clnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'clnName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'contrEndDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'createDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'createUserDeptName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'createUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'createUserName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'dealCmplDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'dealFail'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'dealFailCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'dealFinalStatCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'dealMoveResnCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'dealMoveResnCdName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'dealRegDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'failResnCtn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'mktDealYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'mptb'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'mptbId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'mvinAddr'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'mvinBldId'?: string;
    /**
     * 
     * @type {Array<GetSptbListByTaskIdOut>}
     * @memberof GetRentOut
     */
    'sptbs': Array<GetSptbListByTaskIdOut>;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'statCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'statCdName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'taskId': string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'taskName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'updateDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'updateUserDeptName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'updateUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'updateUserName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetRentOut
     */
    'workId': string;
}

