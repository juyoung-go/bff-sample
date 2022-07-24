import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetWntMstOut } from '../model';
import { GetWntNoticeOut } from '../model';
import { PagingGetWntMstPagingOut } from '../model';
export declare const WntControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    endWebNotification: (authorization: string, wntId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCurrentPostDt: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getNotice: (authorization: string, wntTgtCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getNotices: (authorization: string, wntTgtCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getWebNotification: (authorization: string, wntId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getWntListPaging: (authorization: string, endDt?: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, startDt?: string, wntId?: string, wntTgtCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postWebNotification: (authorization: string, createDt?: string, createUserId?: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, wntTgtCds?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updateWebNotification: (authorization: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, updateDt?: string, updateUserId?: string, wntId?: string, wntTgtCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const WntControllerApiFp: (configuration?: Configuration) => {
    endWebNotification(authorization: string, wntId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getCurrentPostDt(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetWntMstOut>>>;
    getNotice(authorization: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetWntNoticeOut>>;
    getNotices(authorization: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetWntNoticeOut>>>;
    getWebNotification(authorization: string, wntId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetWntMstOut>>;
    getWntListPaging(authorization: string, endDt?: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, startDt?: string, wntId?: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetWntMstPagingOut>>;
    postWebNotification(authorization: string, createDt?: string, createUserId?: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, wntTgtCds?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    updateWebNotification(authorization: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, updateDt?: string, updateUserId?: string, wntId?: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const WntControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    endWebNotification(authorization: string, wntId: string, options?: any): AxiosPromise<void>;
    getCurrentPostDt(authorization: string, options?: any): AxiosPromise<Array<GetWntMstOut>>;
    getNotice(authorization: string, wntTgtCd?: string, options?: any): AxiosPromise<GetWntNoticeOut>;
    getNotices(authorization: string, wntTgtCd?: string, options?: any): AxiosPromise<Array<GetWntNoticeOut>>;
    getWebNotification(authorization: string, wntId: string, options?: any): AxiosPromise<GetWntMstOut>;
    getWntListPaging(authorization: string, endDt?: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, startDt?: string, wntId?: string, wntTgtCd?: string, options?: any): AxiosPromise<PagingGetWntMstPagingOut>;
    postWebNotification(authorization: string, createDt?: string, createUserId?: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, wntTgtCds?: string, options?: any): AxiosPromise<void>;
    updateWebNotification(authorization: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, updateDt?: string, updateUserId?: string, wntId?: string, wntTgtCd?: string, options?: any): AxiosPromise<void>;
};
export declare class WntControllerApi extends BaseAPI {
    endWebNotification(authorization: string, wntId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getCurrentPostDt(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetWntMstOut[], any>>;
    getNotice(authorization: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetWntNoticeOut, any>>;
    getNotices(authorization: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetWntNoticeOut[], any>>;
    getWebNotification(authorization: string, wntId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetWntMstOut, any>>;
    getWntListPaging(authorization: string, endDt?: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, startDt?: string, wntId?: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetWntMstPagingOut, any>>;
    postWebNotification(authorization: string, createDt?: string, createUserId?: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, wntTgtCds?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    updateWebNotification(authorization: string, endDt?: string, expl?: string, file?: any, mobImgPath?: string, pcImgPath?: string, startDt?: string, updateDt?: string, updateUserId?: string, wntId?: string, wntTgtCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
