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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetTransactionOut } from '../model';
// @ts-ignore
import { PagingGetTransactionOut } from '../model';
/**
 * TransactionsControllerApi - axios parameter creator
 * @export
 */
export const TransactionsControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 전문거래내역 단건 조회
         * @param {string} authorization 
         * @param {string} gid gid
         * @param {string} [trDate] trDate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionOne: async (authorization: string, gid: string, trDate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getTransactionOne', 'authorization', authorization)
            // verify required parameter 'gid' is not null or undefined
            assertParamExists('getTransactionOne', 'gid', gid)
            const localVarPath = `/transactions/{gid}`
                .replace(`{${"gid"}}`, encodeURIComponent(String(gid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (trDate !== undefined) {
                localVarQueryParameter['trDate'] = trDate;
            }

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 전문거래내역 다건 조회
         * @param {string} authorization 
         * @param {string} [apiId] 
         * @param {string} [createDt] 
         * @param {string} [createUserId] 
         * @param {string} [elapsed] 
         * @param {string} [errorMessage] 
         * @param {string} [errorYn] 
         * @param {string} [gid] 
         * @param {string} [hostName] 
         * @param {string} [maxTransactionDate] 
         * @param {string} [method] 
         * @param {string} [minTransactionDate] 
         * @param {string} [mobYn] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [path] 
         * @param {string} [referrer] 
         * @param {string} [regUser] 
         * @param {string} [remoteIp] 
         * @param {string} [statusCode] 
         * @param {string} [value] 
         * @param {string} [varName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactions: async (authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getTransactions', 'authorization', authorization)
            const localVarPath = `/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiId !== undefined) {
                localVarQueryParameter['apiId'] = apiId;
            }

            if (createDt !== undefined) {
                localVarQueryParameter['createDt'] = (createDt as any instanceof Date) ?
                    (createDt as any).toISOString() :
                    createDt;
            }

            if (createUserId !== undefined) {
                localVarQueryParameter['createUserId'] = createUserId;
            }

            if (elapsed !== undefined) {
                localVarQueryParameter['elapsed'] = elapsed;
            }

            if (errorMessage !== undefined) {
                localVarQueryParameter['errorMessage'] = errorMessage;
            }

            if (errorYn !== undefined) {
                localVarQueryParameter['errorYn'] = errorYn;
            }

            if (gid !== undefined) {
                localVarQueryParameter['gid'] = gid;
            }

            if (hostName !== undefined) {
                localVarQueryParameter['hostName'] = hostName;
            }

            if (maxTransactionDate !== undefined) {
                localVarQueryParameter['maxTransactionDate'] = maxTransactionDate;
            }

            if (method !== undefined) {
                localVarQueryParameter['method'] = method;
            }

            if (minTransactionDate !== undefined) {
                localVarQueryParameter['minTransactionDate'] = minTransactionDate;
            }

            if (mobYn !== undefined) {
                localVarQueryParameter['mobYn'] = mobYn;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (pageNum !== undefined) {
                localVarQueryParameter['pageNum'] = pageNum;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            if (referrer !== undefined) {
                localVarQueryParameter['referrer'] = referrer;
            }

            if (regUser !== undefined) {
                localVarQueryParameter['regUser'] = regUser;
            }

            if (remoteIp !== undefined) {
                localVarQueryParameter['remoteIp'] = remoteIp;
            }

            if (statusCode !== undefined) {
                localVarQueryParameter['statusCode'] = statusCode;
            }

            if (value !== undefined) {
                localVarQueryParameter['value'] = value;
            }

            if (varName !== undefined) {
                localVarQueryParameter['varName'] = varName;
            }

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionsControllerApi - functional programming interface
 * @export
 */
export const TransactionsControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionsControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 전문거래내역 단건 조회
         * @param {string} authorization 
         * @param {string} gid gid
         * @param {string} [trDate] trDate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionOne(authorization: string, gid: string, trDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransactionOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionOne(authorization, gid, trDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 전문거래내역 다건 조회
         * @param {string} authorization 
         * @param {string} [apiId] 
         * @param {string} [createDt] 
         * @param {string} [createUserId] 
         * @param {string} [elapsed] 
         * @param {string} [errorMessage] 
         * @param {string} [errorYn] 
         * @param {string} [gid] 
         * @param {string} [hostName] 
         * @param {string} [maxTransactionDate] 
         * @param {string} [method] 
         * @param {string} [minTransactionDate] 
         * @param {string} [mobYn] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [path] 
         * @param {string} [referrer] 
         * @param {string} [regUser] 
         * @param {string} [remoteIp] 
         * @param {string} [statusCode] 
         * @param {string} [value] 
         * @param {string} [varName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactions(authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetTransactionOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactions(authorization, apiId, createDt, createUserId, elapsed, errorMessage, errorYn, gid, hostName, maxTransactionDate, method, minTransactionDate, mobYn, orderBy, pageNum, pageSize, path, referrer, regUser, remoteIp, statusCode, value, varName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionsControllerApi - factory interface
 * @export
 */
export const TransactionsControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionsControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary 전문거래내역 단건 조회
         * @param {string} authorization 
         * @param {string} gid gid
         * @param {string} [trDate] trDate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionOne(authorization: string, gid: string, trDate?: string, options?: any): AxiosPromise<GetTransactionOut> {
            return localVarFp.getTransactionOne(authorization, gid, trDate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 전문거래내역 다건 조회
         * @param {string} authorization 
         * @param {string} [apiId] 
         * @param {string} [createDt] 
         * @param {string} [createUserId] 
         * @param {string} [elapsed] 
         * @param {string} [errorMessage] 
         * @param {string} [errorYn] 
         * @param {string} [gid] 
         * @param {string} [hostName] 
         * @param {string} [maxTransactionDate] 
         * @param {string} [method] 
         * @param {string} [minTransactionDate] 
         * @param {string} [mobYn] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [path] 
         * @param {string} [referrer] 
         * @param {string} [regUser] 
         * @param {string} [remoteIp] 
         * @param {string} [statusCode] 
         * @param {string} [value] 
         * @param {string} [varName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactions(authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options?: any): AxiosPromise<PagingGetTransactionOut> {
            return localVarFp.getTransactions(authorization, apiId, createDt, createUserId, elapsed, errorMessage, errorYn, gid, hostName, maxTransactionDate, method, minTransactionDate, mobYn, orderBy, pageNum, pageSize, path, referrer, regUser, remoteIp, statusCode, value, varName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionsControllerApi - object-oriented interface
 * @export
 * @class TransactionsControllerApi
 * @extends {BaseAPI}
 */
export class TransactionsControllerApi extends BaseAPI {
    /**
     * 
     * @summary 전문거래내역 단건 조회
     * @param {string} authorization 
     * @param {string} gid gid
     * @param {string} [trDate] trDate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsControllerApi
     */
    public getTransactionOne(authorization: string, gid: string, trDate?: string, options?: AxiosRequestConfig) {
        return TransactionsControllerApiFp(this.configuration).getTransactionOne(authorization, gid, trDate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 전문거래내역 다건 조회
     * @param {string} authorization 
     * @param {string} [apiId] 
     * @param {string} [createDt] 
     * @param {string} [createUserId] 
     * @param {string} [elapsed] 
     * @param {string} [errorMessage] 
     * @param {string} [errorYn] 
     * @param {string} [gid] 
     * @param {string} [hostName] 
     * @param {string} [maxTransactionDate] 
     * @param {string} [method] 
     * @param {string} [minTransactionDate] 
     * @param {string} [mobYn] 
     * @param {string} [orderBy] 
     * @param {number} [pageNum] 
     * @param {number} [pageSize] 
     * @param {string} [path] 
     * @param {string} [referrer] 
     * @param {string} [regUser] 
     * @param {string} [remoteIp] 
     * @param {string} [statusCode] 
     * @param {string} [value] 
     * @param {string} [varName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsControllerApi
     */
    public getTransactions(authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options?: AxiosRequestConfig) {
        return TransactionsControllerApiFp(this.configuration).getTransactions(authorization, apiId, createDt, createUserId, elapsed, errorMessage, errorYn, gid, hostName, maxTransactionDate, method, minTransactionDate, mobYn, orderBy, pageNum, pageSize, path, referrer, regUser, remoteIp, statusCode, value, varName, options).then((request) => request(this.axios, this.basePath));
    }
}
