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


import { GetLwhCardOut } from './get-lwh-card-out';

/**
 * 
 * @export
 * @interface SearchLwhCardOut
 */
export interface SearchLwhCardOut {
    /**
     * 
     * @type {Array<GetLwhCardOut>}
     * @memberof SearchLwhCardOut
     */
    'list': Array<GetLwhCardOut>;
    /**
     * 
     * @type {number}
     * @memberof SearchLwhCardOut
     */
    'total': number;
}

