import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetPrdPhtForBldScreenOut } from '../model';
import { PatchPrdForLwhScreenModalIn } from '../model';
import { PostLwhPrdIn } from '../model';
export declare const LwhPrdControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteLwhPrd: (authorization: string, lwhPrdId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdPhtForLwhScreen: (authorization: string, prdLwhId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchPrdForLwhScreenModal: (authorization: string, prdLwhId: string, input: PatchPrdForLwhScreenModalIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhPrd: (authorization: string, input: PostLwhPrdIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const LwhPrdControllerApiFp: (configuration?: Configuration) => {
    deleteLwhPrd(authorization: string, lwhPrdId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getPrdPhtForLwhScreen(authorization: string, prdLwhId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetPrdPhtForBldScreenOut>>>;
    patchPrdForLwhScreenModal(authorization: string, prdLwhId: string, input: PatchPrdForLwhScreenModalIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postLwhPrd(authorization: string, input: PostLwhPrdIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const LwhPrdControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteLwhPrd(authorization: string, lwhPrdId?: string, options?: any): AxiosPromise<void>;
    getPrdPhtForLwhScreen(authorization: string, prdLwhId: string, options?: any): AxiosPromise<Array<GetPrdPhtForBldScreenOut>>;
    patchPrdForLwhScreenModal(authorization: string, prdLwhId: string, input: PatchPrdForLwhScreenModalIn, options?: any): AxiosPromise<void>;
    postLwhPrd(authorization: string, input: PostLwhPrdIn, options?: any): AxiosPromise<void>;
};
export declare class LwhPrdControllerApi extends BaseAPI {
    deleteLwhPrd(authorization: string, lwhPrdId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getPrdPhtForLwhScreen(authorization: string, prdLwhId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetPrdPhtForBldScreenOut[], any>>;
    patchPrdForLwhScreenModal(authorization: string, prdLwhId: string, input: PatchPrdForLwhScreenModalIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postLwhPrd(authorization: string, input: PostLwhPrdIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
