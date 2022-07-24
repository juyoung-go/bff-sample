import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBltypTreeOut } from '../model';
import { ObjWhtypMst } from '../model';
import { PagingGetLwhTypeOut } from '../model';
import { PatchLwhTypeIn } from '../model';
import { PostLwhTypeIn } from '../model';
export declare const LwhtypControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteWhtyp: (authorization: string, whtypId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhtypTree: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getWhtypPaging: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, parWhtypId?: string, whtypId?: string, whtypName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchWhtyp: (authorization: string, input: PatchLwhTypeIn, whtypId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postWhtyp: (authorization: string, input: PostLwhTypeIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const LwhtypControllerApiFp: (configuration?: Configuration) => {
    deleteWhtyp(authorization: string, whtypId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getLwhtypTree(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBltypTreeOut>>>;
    getWhtypPaging(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, parWhtypId?: string, whtypId?: string, whtypName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetLwhTypeOut>>;
    patchWhtyp(authorization: string, input: PatchLwhTypeIn, whtypId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjWhtypMst>>;
    postWhtyp(authorization: string, input: PostLwhTypeIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjWhtypMst>>;
};
export declare const LwhtypControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteWhtyp(authorization: string, whtypId?: string, options?: any): AxiosPromise<void>;
    getLwhtypTree(authorization: string, options?: any): AxiosPromise<Array<GetBltypTreeOut>>;
    getWhtypPaging(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, parWhtypId?: string, whtypId?: string, whtypName?: string, options?: any): AxiosPromise<PagingGetLwhTypeOut>;
    patchWhtyp(authorization: string, input: PatchLwhTypeIn, whtypId?: string, options?: any): AxiosPromise<ObjWhtypMst>;
    postWhtyp(authorization: string, input: PostLwhTypeIn, options?: any): AxiosPromise<ObjWhtypMst>;
};
export declare class LwhtypControllerApi extends BaseAPI {
    deleteWhtyp(authorization: string, whtypId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getLwhtypTree(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBltypTreeOut[], any>>;
    getWhtypPaging(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, parWhtypId?: string, whtypId?: string, whtypName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetLwhTypeOut, any>>;
    patchWhtyp(authorization: string, input: PatchLwhTypeIn, whtypId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ObjWhtypMst, any>>;
    postWhtyp(authorization: string, input: PostLwhTypeIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ObjWhtypMst, any>>;
}
