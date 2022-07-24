import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { DeleteSmsTmplIn } from '../model';
import { GetSmsTmplOut } from '../model';
import { PagingGetCdOut } from '../model';
import { PagingGetSmsTmplOut } from '../model';
import { PatchSmsTmplIn } from '../model';
import { PostSmsTmplIn } from '../model';
export declare const SmsTmplControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteSmsTmpl: (authorization: string, input: DeleteSmsTmplIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsTmplCds: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsTmplOne: (authorization: string, smsTmplId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsTmpls: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsTmplTypeCd?: string, tmplName?: string, useAll?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchSmsTmpl: (authorization: string, smsTmplId: string, input: PatchSmsTmplIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postSmsTmpl: (authorization: string, input: PostSmsTmplIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SmsTmplControllerApiFp: (configuration?: Configuration) => {
    deleteSmsTmpl(authorization: string, input: DeleteSmsTmplIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getSmsTmplCds(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetCdOut>>;
    getSmsTmplOne(authorization: string, smsTmplId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSmsTmplOut>>;
    getSmsTmpls(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsTmplTypeCd?: string, tmplName?: string, useAll?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSmsTmplOut>>;
    patchSmsTmpl(authorization: string, smsTmplId: string, input: PatchSmsTmplIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSmsTmplOut>>;
    postSmsTmpl(authorization: string, input: PostSmsTmplIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const SmsTmplControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteSmsTmpl(authorization: string, input: DeleteSmsTmplIn, options?: any): AxiosPromise<void>;
    getSmsTmplCds(authorization: string, options?: any): AxiosPromise<PagingGetCdOut>;
    getSmsTmplOne(authorization: string, smsTmplId: string, options?: any): AxiosPromise<GetSmsTmplOut>;
    getSmsTmpls(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsTmplTypeCd?: string, tmplName?: string, useAll?: string, options?: any): AxiosPromise<PagingGetSmsTmplOut>;
    patchSmsTmpl(authorization: string, smsTmplId: string, input: PatchSmsTmplIn, options?: any): AxiosPromise<GetSmsTmplOut>;
    postSmsTmpl(authorization: string, input: PostSmsTmplIn, options?: any): AxiosPromise<void>;
};
export declare class SmsTmplControllerApi extends BaseAPI {
    deleteSmsTmpl(authorization: string, input: DeleteSmsTmplIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getSmsTmplCds(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetCdOut, any>>;
    getSmsTmplOne(authorization: string, smsTmplId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSmsTmplOut, any>>;
    getSmsTmpls(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsTmplTypeCd?: string, tmplName?: string, useAll?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSmsTmplOut, any>>;
    patchSmsTmpl(authorization: string, smsTmplId: string, input: PatchSmsTmplIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSmsTmplOut, any>>;
    postSmsTmpl(authorization: string, input: PostSmsTmplIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
