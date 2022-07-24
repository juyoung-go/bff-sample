import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
export declare const TestControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getBadSqlGrammarException: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBizError: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getExternalApiErrorKhttp: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getExternalApiErrorTryCatch: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getServiceError: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const TestControllerApiFp: (configuration?: Configuration) => {
    getBadSqlGrammarException(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getBizError(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getExternalApiErrorKhttp(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getExternalApiErrorTryCatch(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getServiceError(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const TestControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getBadSqlGrammarException(authorization: string, options?: any): AxiosPromise<string>;
    getBizError(authorization: string, options?: any): AxiosPromise<void>;
    getExternalApiErrorKhttp(authorization: string, options?: any): AxiosPromise<void>;
    getExternalApiErrorTryCatch(authorization: string, options?: any): AxiosPromise<void>;
    getServiceError(authorization: string, options?: any): AxiosPromise<number>;
};
export declare class TestControllerApi extends BaseAPI {
    getBadSqlGrammarException(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getBizError(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getExternalApiErrorKhttp(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getExternalApiErrorTryCatch(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getServiceError(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
