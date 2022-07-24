import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetApiOut } from '../model';
import { PagingGetApiOut } from '../model';
import { PatchApiIn } from '../model';
import { PostApiIn } from '../model';
export declare const ApiControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteApi: (authorization: string, apiId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getApis: (authorization: string, apiId?: string, apiName?: string, className?: string, httpMethodCd?: string, methodName?: string, orderBy?: string, pageNum?: number, pageSize?: number, urlPath?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchApi: (authorization: string, apiId: string, input: PatchApiIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postApi: (authorization: string, input: PostApiIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ApiControllerApiFp: (configuration?: Configuration) => {
    deleteApi(authorization: string, apiId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getApis(authorization: string, apiId?: string, apiName?: string, className?: string, httpMethodCd?: string, methodName?: string, orderBy?: string, pageNum?: number, pageSize?: number, urlPath?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetApiOut>>;
    patchApi(authorization: string, apiId: string, input: PatchApiIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiOut>>;
    postApi(authorization: string, input: PostApiIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiOut>>;
};
export declare const ApiControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteApi(authorization: string, apiId: string, options?: any): AxiosPromise<void>;
    getApis(authorization: string, apiId?: string, apiName?: string, className?: string, httpMethodCd?: string, methodName?: string, orderBy?: string, pageNum?: number, pageSize?: number, urlPath?: string, options?: any): AxiosPromise<PagingGetApiOut>;
    patchApi(authorization: string, apiId: string, input: PatchApiIn, options?: any): AxiosPromise<GetApiOut>;
    postApi(authorization: string, input: PostApiIn, options?: any): AxiosPromise<GetApiOut>;
};
export declare class ApiControllerApi extends BaseAPI {
    deleteApi(authorization: string, apiId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getApis(authorization: string, apiId?: string, apiName?: string, className?: string, httpMethodCd?: string, methodName?: string, orderBy?: string, pageNum?: number, pageSize?: number, urlPath?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetApiOut, any>>;
    patchApi(authorization: string, apiId: string, input: PatchApiIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetApiOut, any>>;
    postApi(authorization: string, input: PostApiIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetApiOut, any>>;
}
