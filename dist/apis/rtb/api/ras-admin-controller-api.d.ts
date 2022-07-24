import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetCmpUserOut } from '../model';
import { PostCmpUserIn } from '../model';
import { SendRasAuthMailIn } from '../model';
export declare const RasAdminControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    addCmpUser: (authorization: string, input: PostCmpUserIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMyCmpUserList: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasCmpId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    sendAuthMailToUser: (authorization: string, input: SendRasAuthMailIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    userDisabledByUserEmail: (authorization: string, userEmail?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const RasAdminControllerApiFp: (configuration?: Configuration) => {
    addCmpUser(authorization: string, input: PostCmpUserIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getMyCmpUserList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasCmpId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetCmpUserOut>>;
    sendAuthMailToUser(authorization: string, input: SendRasAuthMailIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    userDisabledByUserEmail(authorization: string, userEmail?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const RasAdminControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    addCmpUser(authorization: string, input: PostCmpUserIn, options?: any): AxiosPromise<void>;
    getMyCmpUserList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasCmpId?: string, options?: any): AxiosPromise<PagingGetCmpUserOut>;
    sendAuthMailToUser(authorization: string, input: SendRasAuthMailIn, options?: any): AxiosPromise<void>;
    userDisabledByUserEmail(authorization: string, userEmail?: string, options?: any): AxiosPromise<void>;
};
export declare class RasAdminControllerApi extends BaseAPI {
    addCmpUser(authorization: string, input: PostCmpUserIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getMyCmpUserList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasCmpId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetCmpUserOut, any>>;
    sendAuthMailToUser(authorization: string, input: SendRasAuthMailIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    userDisabledByUserEmail(authorization: string, userEmail?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
