import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetRasCmpOut } from '../model';
import { PagingGetRasUserOut } from '../model';
import { PatchRasCmpIn } from '../model';
import { PatchRasUserIn } from '../model';
import { PostRasCmpIn } from '../model';
import { PostRasUserIn } from '../model';
export declare const RaaSControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteCmp: (authorization: string, rasCmpId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteRaasUser: (authorization: string, rasUserId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCmpList: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, paging?: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getRaasUserList: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasUserId?: string, userCmp?: string, userEmail?: string, userName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postCmpIn: (authorization: string, input: PostRasCmpIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postRaasUserIn: (authorization: string, input: PostRasUserIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updateCmp: (authorization: string, input: PatchRasCmpIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updateRaasUser: (authorization: string, input: PatchRasUserIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const RaaSControllerApiFp: (configuration?: Configuration) => {
    deleteCmp(authorization: string, rasCmpId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteRaasUser(authorization: string, rasUserId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getCmpList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, paging?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetRasCmpOut>>;
    getRaasUserList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasUserId?: string, userCmp?: string, userEmail?: string, userName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetRasUserOut>>;
    postCmpIn(authorization: string, input: PostRasCmpIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postRaasUserIn(authorization: string, input: PostRasUserIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    updateCmp(authorization: string, input: PatchRasCmpIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    updateRaasUser(authorization: string, input: PatchRasUserIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const RaaSControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteCmp(authorization: string, rasCmpId: string, options?: any): AxiosPromise<void>;
    deleteRaasUser(authorization: string, rasUserId: string, options?: any): AxiosPromise<void>;
    getCmpList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, paging?: boolean, options?: any): AxiosPromise<PagingGetRasCmpOut>;
    getRaasUserList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasUserId?: string, userCmp?: string, userEmail?: string, userName?: string, options?: any): AxiosPromise<PagingGetRasUserOut>;
    postCmpIn(authorization: string, input: PostRasCmpIn, options?: any): AxiosPromise<void>;
    postRaasUserIn(authorization: string, input: PostRasUserIn, options?: any): AxiosPromise<void>;
    updateCmp(authorization: string, input: PatchRasCmpIn, options?: any): AxiosPromise<void>;
    updateRaasUser(authorization: string, input: PatchRasUserIn, options?: any): AxiosPromise<void>;
};
export declare class RaaSControllerApi extends BaseAPI {
    deleteCmp(authorization: string, rasCmpId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteRaasUser(authorization: string, rasUserId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getCmpList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, paging?: boolean, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetRasCmpOut, any>>;
    getRaasUserList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rasUserId?: string, userCmp?: string, userEmail?: string, userName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetRasUserOut, any>>;
    postCmpIn(authorization: string, input: PostRasCmpIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postRaasUserIn(authorization: string, input: PostRasUserIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    updateCmp(authorization: string, input: PatchRasCmpIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    updateRaasUser(authorization: string, input: PatchRasUserIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
