import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetScreenOut } from '../model';
import { PagingGetScreenOut } from '../model';
import { PatchScreenIn } from '../model';
import { PostScreenIn } from '../model';
export declare const ScreenControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteScreen: (authorization: string, screenId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getScreen: (authorization: string, screenId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getScreenPaging: (authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchScreen: (authorization: string, screenId: string, input: PatchScreenIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postScreen: (authorization: string, input: PostScreenIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectScreenPagingForMenuScreenRegModal: (authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, screenName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ScreenControllerApiFp: (configuration?: Configuration) => {
    deleteScreen(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getScreen(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetScreenOut>>;
    getScreenPaging(authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetScreenOut>>;
    patchScreen(authorization: string, screenId: string, input: PatchScreenIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetScreenOut>>;
    postScreen(authorization: string, input: PostScreenIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    selectScreenPagingForMenuScreenRegModal(authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, screenName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetScreenOut>>;
};
export declare const ScreenControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteScreen(authorization: string, screenId: string, options?: any): AxiosPromise<void>;
    getScreen(authorization: string, screenId: string, options?: any): AxiosPromise<GetScreenOut>;
    getScreenPaging(authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: any): AxiosPromise<PagingGetScreenOut>;
    patchScreen(authorization: string, screenId: string, input: PatchScreenIn, options?: any): AxiosPromise<GetScreenOut>;
    postScreen(authorization: string, input: PostScreenIn, options?: any): AxiosPromise<void>;
    selectScreenPagingForMenuScreenRegModal(authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, screenName?: string, options?: any): AxiosPromise<PagingGetScreenOut>;
};
export declare class ScreenControllerApi extends BaseAPI {
    deleteScreen(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getScreen(authorization: string, screenId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetScreenOut, any>>;
    getScreenPaging(authorization: string, appCd?: string, expl?: string, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenCompName?: string, screenId?: string, screenName?: string, screenTypeCd?: string, urlPath?: string, useYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetScreenOut, any>>;
    patchScreen(authorization: string, screenId: string, input: PatchScreenIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetScreenOut, any>>;
    postScreen(authorization: string, input: PostScreenIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    selectScreenPagingForMenuScreenRegModal(authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, screenName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetScreenOut, any>>;
}
