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
 * @interface PatchRentIn
 */
export interface PatchRentIn {
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'workId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'taskId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'taskName'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'dealStatCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'dealMoveResnCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'clnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'bldId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'mptb'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchRentIn
     */
    'sptbs'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'dealMktTeamMngYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'dealFinalStatCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'dealFailCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchRentIn
     */
    'dtlCtn'?: string;
}

