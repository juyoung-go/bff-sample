import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetUserDeviceIn } from '../model';
import { GetUserDeviceOut } from '../model';
import { PagingGetPushMsgOut } from '../model';
import { PostPushMsgIn } from '../model';
export declare const PushControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deletePushMsg: (authorization: string, pushId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDontReadPushCount: (authorization: string, userId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    pushNotification: (authorization: string, input: PostPushMsgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectPushMsgListScreen: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectUserTokenList: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updateUserDeviceInfo: (authorization: string, input: GetUserDeviceIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const PushControllerApiFp: (configuration?: Configuration) => {
    deletePushMsg(authorization: string, pushId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getDontReadPushCount(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    pushNotification(authorization: string, input: PostPushMsgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    selectPushMsgListScreen(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetPushMsgOut>>;
    selectUserTokenList(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetUserDeviceOut>>>;
    updateUserDeviceInfo(authorization: string, input: GetUserDeviceIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const PushControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deletePushMsg(authorization: string, pushId: string, options?: any): AxiosPromise<void>;
    getDontReadPushCount(authorization: string, userId: string, options?: any): AxiosPromise<number>;
    pushNotification(authorization: string, input: PostPushMsgIn, options?: any): AxiosPromise<void>;
    selectPushMsgListScreen(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: any): AxiosPromise<PagingGetPushMsgOut>;
    selectUserTokenList(authorization: string, options?: any): AxiosPromise<Array<GetUserDeviceOut>>;
    updateUserDeviceInfo(authorization: string, input: GetUserDeviceIn, options?: any): AxiosPromise<void>;
};
export declare class PushControllerApi extends BaseAPI {
    deletePushMsg(authorization: string, pushId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getDontReadPushCount(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    pushNotification(authorization: string, input: PostPushMsgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    selectPushMsgListScreen(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetPushMsgOut, any>>;
    selectUserTokenList(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetUserDeviceOut[], any>>;
    updateUserDeviceInfo(authorization: string, input: GetUserDeviceIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
