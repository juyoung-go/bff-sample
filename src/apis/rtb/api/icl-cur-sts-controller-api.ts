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
import { GetBldPointOut } from '../model';
// @ts-ignore
import { PagingGetAllCurStsConOut } from '../model';
// @ts-ignore
import { PagingGetAllCurStsConTypeOut } from '../model';
// @ts-ignore
import { PagingGetAllCurStsPhtOut } from '../model';
// @ts-ignore
import { PagingGetAllCurStsWorkTypeOut } from '../model';
/**
 * IclCurStsControllerApi - axios parameter creator
 * @export
 */
export const IclCurStsControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 연락처업무 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsConPaging: async (authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getAllCurStsConPaging', 'authorization', authorization)
            const localVarPath = `/cur-sts/con`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxProcDy !== undefined) {
                localVarQueryParameter['maxProcDy'] = maxProcDy;
            }

            if (minProcDy !== undefined) {
                localVarQueryParameter['minProcDy'] = minProcDy;
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

            if (workType !== undefined) {
                localVarQueryParameter['workType'] = workType;
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
         * @summary 연락처유형별 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsConTypePaging: async (authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getAllCurStsConTypePaging', 'authorization', authorization)
            const localVarPath = `/cur-sts/con-type`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxProcDy !== undefined) {
                localVarQueryParameter['maxProcDy'] = maxProcDy;
            }

            if (minProcDy !== undefined) {
                localVarQueryParameter['minProcDy'] = minProcDy;
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

            if (workType !== undefined) {
                localVarQueryParameter['workType'] = workType;
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
         * @summary 사진업무처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxAssignDy] 
         * @param {string} [maxPhtCreateDt] 
         * @param {string} [maxProcDy] 
         * @param {string} [minAssignDy] 
         * @param {string} [minPhtCreateDt] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsPhtPaging: async (authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getAllCurStsPhtPaging', 'authorization', authorization)
            const localVarPath = `/cur-sts/pht`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxAssignDy !== undefined) {
                localVarQueryParameter['maxAssignDy'] = maxAssignDy;
            }

            if (maxPhtCreateDt !== undefined) {
                localVarQueryParameter['maxPhtCreateDt'] = maxPhtCreateDt;
            }

            if (maxProcDy !== undefined) {
                localVarQueryParameter['maxProcDy'] = maxProcDy;
            }

            if (minAssignDy !== undefined) {
                localVarQueryParameter['minAssignDy'] = minAssignDy;
            }

            if (minPhtCreateDt !== undefined) {
                localVarQueryParameter['minPhtCreateDt'] = minPhtCreateDt;
            }

            if (minProcDy !== undefined) {
                localVarQueryParameter['minProcDy'] = minProcDy;
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

            if (workType !== undefined) {
                localVarQueryParameter['workType'] = workType;
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
         * @summary 업무유형별 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsWorkTypePaging: async (authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getAllCurStsWorkTypePaging', 'authorization', authorization)
            const localVarPath = `/cur-sts/work-type`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxProcDy !== undefined) {
                localVarQueryParameter['maxProcDy'] = maxProcDy;
            }

            if (minProcDy !== undefined) {
                localVarQueryParameter['minProcDy'] = minProcDy;
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

            if (workType !== undefined) {
                localVarQueryParameter['workType'] = workType;
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
         * @summary 빌딩 포인트 조회
         * @param {string} authorization 
         * @param {string} maxProcDy maxProcDy
         * @param {string} minProcDy minProcDy
         * @param {string} ptbId ptbId
         * @param {string} workCfCd workCfCd
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuildingsByIclWorkList: async (authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getBuildingsByIclWorkList', 'authorization', authorization)
            // verify required parameter 'maxProcDy' is not null or undefined
            assertParamExists('getBuildingsByIclWorkList', 'maxProcDy', maxProcDy)
            // verify required parameter 'minProcDy' is not null or undefined
            assertParamExists('getBuildingsByIclWorkList', 'minProcDy', minProcDy)
            // verify required parameter 'ptbId' is not null or undefined
            assertParamExists('getBuildingsByIclWorkList', 'ptbId', ptbId)
            // verify required parameter 'workCfCd' is not null or undefined
            assertParamExists('getBuildingsByIclWorkList', 'workCfCd', workCfCd)
            const localVarPath = `/cur-sts/work-type/map`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (maxProcDy !== undefined) {
                localVarQueryParameter['maxProcDy'] = maxProcDy;
            }

            if (minProcDy !== undefined) {
                localVarQueryParameter['minProcDy'] = minProcDy;
            }

            if (ptbId !== undefined) {
                localVarQueryParameter['ptbId'] = ptbId;
            }

            if (workCfCd !== undefined) {
                localVarQueryParameter['workCfCd'] = workCfCd;
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
 * IclCurStsControllerApi - functional programming interface
 * @export
 */
export const IclCurStsControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IclCurStsControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 연락처업무 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCurStsConPaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsConOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCurStsConPaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 연락처유형별 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCurStsConTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsConTypeOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCurStsConTypePaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 사진업무처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxAssignDy] 
         * @param {string} [maxPhtCreateDt] 
         * @param {string} [maxProcDy] 
         * @param {string} [minAssignDy] 
         * @param {string} [minPhtCreateDt] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCurStsPhtPaging(authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsPhtOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCurStsPhtPaging(authorization, maxAssignDy, maxPhtCreateDt, maxProcDy, minAssignDy, minPhtCreateDt, minProcDy, orderBy, pageNum, pageSize, workType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 업무유형별 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCurStsWorkTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsWorkTypeOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCurStsWorkTypePaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 빌딩 포인트 조회
         * @param {string} authorization 
         * @param {string} maxProcDy maxProcDy
         * @param {string} minProcDy minProcDy
         * @param {string} ptbId ptbId
         * @param {string} workCfCd workCfCd
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBuildingsByIclWorkList(authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBldPointOut>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBuildingsByIclWorkList(authorization, maxProcDy, minProcDy, ptbId, workCfCd, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IclCurStsControllerApi - factory interface
 * @export
 */
export const IclCurStsControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IclCurStsControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary 연락처업무 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsConPaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsConOut> {
            return localVarFp.getAllCurStsConPaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 연락처유형별 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsConTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsConTypeOut> {
            return localVarFp.getAllCurStsConTypePaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 사진업무처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxAssignDy] 
         * @param {string} [maxPhtCreateDt] 
         * @param {string} [maxProcDy] 
         * @param {string} [minAssignDy] 
         * @param {string} [minPhtCreateDt] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsPhtPaging(authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsPhtOut> {
            return localVarFp.getAllCurStsPhtPaging(authorization, maxAssignDy, maxPhtCreateDt, maxProcDy, minAssignDy, minPhtCreateDt, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 업무유형별 처리현황 페이징 조회
         * @param {string} authorization 
         * @param {string} [maxProcDy] 
         * @param {string} [minProcDy] 
         * @param {string} [orderBy] 
         * @param {number} [pageNum] 
         * @param {number} [pageSize] 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCurStsWorkTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsWorkTypeOut> {
            return localVarFp.getAllCurStsWorkTypePaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 빌딩 포인트 조회
         * @param {string} authorization 
         * @param {string} maxProcDy maxProcDy
         * @param {string} minProcDy minProcDy
         * @param {string} ptbId ptbId
         * @param {string} workCfCd workCfCd
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBuildingsByIclWorkList(authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options?: any): AxiosPromise<Array<GetBldPointOut>> {
            return localVarFp.getBuildingsByIclWorkList(authorization, maxProcDy, minProcDy, ptbId, workCfCd, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IclCurStsControllerApi - object-oriented interface
 * @export
 * @class IclCurStsControllerApi
 * @extends {BaseAPI}
 */
export class IclCurStsControllerApi extends BaseAPI {
    /**
     * 
     * @summary 연락처업무 처리현황 페이징 조회
     * @param {string} authorization 
     * @param {string} [maxProcDy] 
     * @param {string} [minProcDy] 
     * @param {string} [orderBy] 
     * @param {number} [pageNum] 
     * @param {number} [pageSize] 
     * @param {string} [workType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IclCurStsControllerApi
     */
    public getAllCurStsConPaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) {
        return IclCurStsControllerApiFp(this.configuration).getAllCurStsConPaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 연락처유형별 처리현황 페이징 조회
     * @param {string} authorization 
     * @param {string} [maxProcDy] 
     * @param {string} [minProcDy] 
     * @param {string} [orderBy] 
     * @param {number} [pageNum] 
     * @param {number} [pageSize] 
     * @param {string} [workType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IclCurStsControllerApi
     */
    public getAllCurStsConTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) {
        return IclCurStsControllerApiFp(this.configuration).getAllCurStsConTypePaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 사진업무처리현황 페이징 조회
     * @param {string} authorization 
     * @param {string} [maxAssignDy] 
     * @param {string} [maxPhtCreateDt] 
     * @param {string} [maxProcDy] 
     * @param {string} [minAssignDy] 
     * @param {string} [minPhtCreateDt] 
     * @param {string} [minProcDy] 
     * @param {string} [orderBy] 
     * @param {number} [pageNum] 
     * @param {number} [pageSize] 
     * @param {string} [workType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IclCurStsControllerApi
     */
    public getAllCurStsPhtPaging(authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) {
        return IclCurStsControllerApiFp(this.configuration).getAllCurStsPhtPaging(authorization, maxAssignDy, maxPhtCreateDt, maxProcDy, minAssignDy, minPhtCreateDt, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 업무유형별 처리현황 페이징 조회
     * @param {string} authorization 
     * @param {string} [maxProcDy] 
     * @param {string} [minProcDy] 
     * @param {string} [orderBy] 
     * @param {number} [pageNum] 
     * @param {number} [pageSize] 
     * @param {string} [workType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IclCurStsControllerApi
     */
    public getAllCurStsWorkTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) {
        return IclCurStsControllerApiFp(this.configuration).getAllCurStsWorkTypePaging(authorization, maxProcDy, minProcDy, orderBy, pageNum, pageSize, workType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 빌딩 포인트 조회
     * @param {string} authorization 
     * @param {string} maxProcDy maxProcDy
     * @param {string} minProcDy minProcDy
     * @param {string} ptbId ptbId
     * @param {string} workCfCd workCfCd
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IclCurStsControllerApi
     */
    public getBuildingsByIclWorkList(authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options?: AxiosRequestConfig) {
        return IclCurStsControllerApiFp(this.configuration).getBuildingsByIclWorkList(authorization, maxProcDy, minProcDy, ptbId, workCfCd, options).then((request) => request(this.axios, this.basePath));
    }
}
