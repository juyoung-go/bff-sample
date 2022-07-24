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


import { Sort } from './sort';

/**
 * 
 * @export
 * @interface Pageable
 */
export interface Pageable {
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    'offset'?: number;
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    'pageNumber'?: number;
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    'pageSize'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Pageable
     */
    'paged'?: boolean;
    /**
     * 
     * @type {Sort}
     * @memberof Pageable
     */
    'sort'?: Sort;
    /**
     * 
     * @type {boolean}
     * @memberof Pageable
     */
    'unpaged'?: boolean;
}

