import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBltypOut } from '../model';
import { GetBltypTreeOut } from '../model';
import { GetParbltypsOut } from '../model';
import { PagingGetBltypOut } from '../model';
import { PatchBltypIn } from '../model';
import { PostBltypIn } from '../model';
export declare const BltypControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteBltyp: (authorization: string, bltypId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBltyp: (authorization: string, bltypId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBltypPaging: (authorization: string, bltypId?: string, bltypName?: string, orderBy?: string, pageNum?: number, pageSize?: number, parBltypId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBltypTree: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBltypsByParBltyps: (authorization: string, parbltypIds?: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBltypsNonePar: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getParBltyps: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchBltyp: (authorization: string, bltypId: string, input: PatchBltypIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postBltyp: (authorization: string, input: PostBltypIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BltypControllerApiFp: (configuration?: Configuration) => {
    deleteBltyp(authorization: string, bltypId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getBltyp(authorization: string, bltypId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBltypOut>>;
    getBltypPaging(authorization: string, bltypId?: string, bltypName?: string, orderBy?: string, pageNum?: number, pageSize?: number, parBltypId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBltypOut>>;
    getBltypTree(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBltypTreeOut>>>;
    getBltypsByParBltyps(authorization: string, parbltypIds?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBltypOut>>>;
    getBltypsNonePar(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetParbltypsOut>>>;
    getParBltyps(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetParbltypsOut>>>;
    patchBltyp(authorization: string, bltypId: string, input: PatchBltypIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBltypOut>>;
    postBltyp(authorization: string, input: PostBltypIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBltypOut>>;
};
export declare const BltypControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteBltyp(authorization: string, bltypId: string, options?: any): AxiosPromise<void>;
    getBltyp(authorization: string, bltypId: string, options?: any): AxiosPromise<GetBltypOut>;
    getBltypPaging(authorization: string, bltypId?: string, bltypName?: string, orderBy?: string, pageNum?: number, pageSize?: number, parBltypId?: string, options?: any): AxiosPromise<PagingGetBltypOut>;
    getBltypTree(authorization: string, options?: any): AxiosPromise<Array<GetBltypTreeOut>>;
    getBltypsByParBltyps(authorization: string, parbltypIds?: Array<string>, options?: any): AxiosPromise<Array<GetBltypOut>>;
    getBltypsNonePar(authorization: string, options?: any): AxiosPromise<Array<GetParbltypsOut>>;
    getParBltyps(authorization: string, options?: any): AxiosPromise<Array<GetParbltypsOut>>;
    patchBltyp(authorization: string, bltypId: string, input: PatchBltypIn, options?: any): AxiosPromise<GetBltypOut>;
    postBltyp(authorization: string, input: PostBltypIn, options?: any): AxiosPromise<GetBltypOut>;
};
export declare class BltypControllerApi extends BaseAPI {
    deleteBltyp(authorization: string, bltypId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getBltyp(authorization: string, bltypId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBltypOut, any>>;
    getBltypPaging(authorization: string, bltypId?: string, bltypName?: string, orderBy?: string, pageNum?: number, pageSize?: number, parBltypId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBltypOut, any>>;
    getBltypTree(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBltypTreeOut[], any>>;
    getBltypsByParBltyps(authorization: string, parbltypIds?: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBltypOut[], any>>;
    getBltypsNonePar(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetParbltypsOut[], any>>;
    getParBltyps(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetParbltypsOut[], any>>;
    patchBltyp(authorization: string, bltypId: string, input: PatchBltypIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBltypOut, any>>;
    postBltyp(authorization: string, input: PostBltypIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBltypOut, any>>;
}
