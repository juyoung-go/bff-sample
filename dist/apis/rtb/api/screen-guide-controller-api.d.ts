import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetScreenOut } from '../model';
import { PagingGetScreenOut } from '../model';
import { PatchScreenIn } from '../model';
export declare const ScreenGuideControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteScreen1: (authorization: string, screenId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getScreen1: (authorization: string, screenId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getScreenListPaging: (authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchScreen1: (authorization: string, screenId: string, input: PatchScreenIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postScreen1: (authorization: string, input: PatchScreenIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ScreenGuideControllerApiFp: (configuration?: Configuration) => {
    deleteScreen1(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getScreen1(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetScreenOut>>;
    getScreenListPaging(authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetScreenOut>>;
    patchScreen1(authorization: string, screenId: string, input: PatchScreenIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetScreenOut>>;
    postScreen1(authorization: string, input: PatchScreenIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetScreenOut>>;
};
export declare const ScreenGuideControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteScreen1(authorization: string, screenId: string, options?: any): AxiosPromise<void>;
    getScreen1(authorization: string, screenId: string, options?: any): AxiosPromise<GetScreenOut>;
    getScreenListPaging(authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: any): AxiosPromise<PagingGetScreenOut>;
    patchScreen1(authorization: string, screenId: string, input: PatchScreenIn, options?: any): AxiosPromise<GetScreenOut>;
    postScreen1(authorization: string, input: PatchScreenIn, options?: any): AxiosPromise<GetScreenOut>;
};
export declare class ScreenGuideControllerApi extends BaseAPI {
    deleteScreen1(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getScreen1(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetScreenOut, any>>;
    getScreenListPaging(authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetScreenOut, any>>;
    patchScreen1(authorization: string, screenId: string, input: PatchScreenIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetScreenOut, any>>;
    postScreen1(authorization: string, input: PatchScreenIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetScreenOut, any>>;
}
