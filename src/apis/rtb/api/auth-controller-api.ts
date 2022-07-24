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
import { RedirectView } from '../model';
// @ts-ignore
import { SignInByAndroidOut } from '../model';
/**
 * AuthControllerApi - axios parameter creator
 * @export
 */
export const AuthControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getTokenForDevelop
         * @param {string} authorization 
         * @param {string} code code
         * @param {string} email email
         * @param {string} mobYn mobYn
         * @param {string} wpiYn wpiYn
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokenForDevelopUsingGET: async (authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getTokenForDevelopUsingGET', 'authorization', authorization)
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getTokenForDevelopUsingGET', 'code', code)
            // verify required parameter 'email' is not null or undefined
            assertParamExists('getTokenForDevelopUsingGET', 'email', email)
            // verify required parameter 'mobYn' is not null or undefined
            assertParamExists('getTokenForDevelopUsingGET', 'mobYn', mobYn)
            // verify required parameter 'wpiYn' is not null or undefined
            assertParamExists('getTokenForDevelopUsingGET', 'wpiYn', wpiYn)
            const localVarPath = `/auth/token/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (mobYn !== undefined) {
                localVarQueryParameter['mobYn'] = mobYn;
            }

            if (wpiYn !== undefined) {
                localVarQueryParameter['wpiYn'] = wpiYn;
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
         * @summary googleCallback
         * @param {string} authorization 
         * @param {string} code code
         * @param {string} state state
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        googleCallbackUsingGET: async (authorization: string, code: string, state: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('googleCallbackUsingGET', 'authorization', authorization)
            // verify required parameter 'code' is not null or undefined
            assertParamExists('googleCallbackUsingGET', 'code', code)
            // verify required parameter 'state' is not null or undefined
            assertParamExists('googleCallbackUsingGET', 'state', state)
            const localVarPath = `/auth/google/callback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
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
         * @summary signInByAndroid
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signInByAndroidUsingPOST: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('signInByAndroidUsingPOST', 'authorization', authorization)
            const localVarPath = `/auth/sign-in/android`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @summary signIn
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signInUsingPOST: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('signInUsingPOST', 'authorization', authorization)
            const localVarPath = `/auth/sign-in/google`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @summary verify
         * @param {string} authorization 
         * @param {string} [token] token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyUsingGET: async (authorization: string, token?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('verifyUsingGET', 'authorization', authorization)
            const localVarPath = `/auth/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
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
 * AuthControllerApi - functional programming interface
 * @export
 */
export const AuthControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary getTokenForDevelop
         * @param {string} authorization 
         * @param {string} code code
         * @param {string} email email
         * @param {string} mobYn mobYn
         * @param {string} wpiYn wpiYn
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTokenForDevelopUsingGET(authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokenForDevelopUsingGET(authorization, code, email, mobYn, wpiYn, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary googleCallback
         * @param {string} authorization 
         * @param {string} code code
         * @param {string} state state
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async googleCallbackUsingGET(authorization: string, code: string, state: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RedirectView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.googleCallbackUsingGET(authorization, code, state, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary signInByAndroid
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signInByAndroidUsingPOST(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignInByAndroidOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signInByAndroidUsingPOST(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary signIn
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signInUsingPOST(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signInUsingPOST(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary verify
         * @param {string} authorization 
         * @param {string} [token] token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyUsingGET(authorization: string, token?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyUsingGET(authorization, token, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthControllerApi - factory interface
 * @export
 */
export const AuthControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary getTokenForDevelop
         * @param {string} authorization 
         * @param {string} code code
         * @param {string} email email
         * @param {string} mobYn mobYn
         * @param {string} wpiYn wpiYn
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokenForDevelopUsingGET(authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options?: any): AxiosPromise<string> {
            return localVarFp.getTokenForDevelopUsingGET(authorization, code, email, mobYn, wpiYn, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary googleCallback
         * @param {string} authorization 
         * @param {string} code code
         * @param {string} state state
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        googleCallbackUsingGET(authorization: string, code: string, state: string, options?: any): AxiosPromise<RedirectView> {
            return localVarFp.googleCallbackUsingGET(authorization, code, state, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary signInByAndroid
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signInByAndroidUsingPOST(authorization: string, options?: any): AxiosPromise<SignInByAndroidOut> {
            return localVarFp.signInByAndroidUsingPOST(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary signIn
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signInUsingPOST(authorization: string, options?: any): AxiosPromise<string> {
            return localVarFp.signInUsingPOST(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary verify
         * @param {string} authorization 
         * @param {string} [token] token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyUsingGET(authorization: string, token?: string, options?: any): AxiosPromise<string> {
            return localVarFp.verifyUsingGET(authorization, token, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthControllerApi - object-oriented interface
 * @export
 * @class AuthControllerApi
 * @extends {BaseAPI}
 */
export class AuthControllerApi extends BaseAPI {
    /**
     * 
     * @summary getTokenForDevelop
     * @param {string} authorization 
     * @param {string} code code
     * @param {string} email email
     * @param {string} mobYn mobYn
     * @param {string} wpiYn wpiYn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public getTokenForDevelopUsingGET(authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options?: AxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).getTokenForDevelopUsingGET(authorization, code, email, mobYn, wpiYn, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary googleCallback
     * @param {string} authorization 
     * @param {string} code code
     * @param {string} state state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public googleCallbackUsingGET(authorization: string, code: string, state: string, options?: AxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).googleCallbackUsingGET(authorization, code, state, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary signInByAndroid
     * @param {string} authorization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public signInByAndroidUsingPOST(authorization: string, options?: AxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).signInByAndroidUsingPOST(authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary signIn
     * @param {string} authorization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public signInUsingPOST(authorization: string, options?: AxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).signInUsingPOST(authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary verify
     * @param {string} authorization 
     * @param {string} [token] token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public verifyUsingGET(authorization: string, token?: string, options?: AxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).verifyUsingGET(authorization, token, options).then((request) => request(this.axios, this.basePath));
    }
}
