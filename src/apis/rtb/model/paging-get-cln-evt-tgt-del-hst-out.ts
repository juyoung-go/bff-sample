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


import { GetClnEvtTgtDelHstOut } from './get-cln-evt-tgt-del-hst-out';

/**
 * 
 * @export
 * @interface PagingGetClnEvtTgtDelHstOut
 */
export interface PagingGetClnEvtTgtDelHstOut {
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'bfirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'blastPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'endRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'firstPageNum': number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'hasNextPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'hasPreviousPage': boolean;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'lastPageNum': number;
    /**
     * 
     * @type {Array<GetClnEvtTgtDelHstOut>}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'list': Array<GetClnEvtTgtDelHstOut>;
    /**
     * 
     * @type {string}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'pageNum': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'pageSize': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'startRow': number;
    /**
     * 
     * @type {number}
     * @memberof PagingGetClnEvtTgtDelHstOut
     */
    'total': number;
}

