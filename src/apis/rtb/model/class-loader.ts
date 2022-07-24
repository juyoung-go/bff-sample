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


import { Module } from './module';
import { Package } from './package';

/**
 * 
 * @export
 * @interface ClassLoader
 */
export interface ClassLoader {
    /**
     * 
     * @type {Array<Package>}
     * @memberof ClassLoader
     */
    'definedPackages'?: Array<Package>;
    /**
     * 
     * @type {string}
     * @memberof ClassLoader
     */
    'name'?: string;
    /**
     * 
     * @type {ClassLoader}
     * @memberof ClassLoader
     */
    'parent'?: ClassLoader;
    /**
     * 
     * @type {boolean}
     * @memberof ClassLoader
     */
    'registeredAsParallelCapable'?: boolean;
    /**
     * 
     * @type {Module}
     * @memberof ClassLoader
     */
    'unnamedModule'?: Module;
}

