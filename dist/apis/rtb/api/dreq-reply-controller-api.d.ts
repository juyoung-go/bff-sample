import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { DeleteDreqReplyIn } from '../model';
import { PagingGetDreqReplyOut } from '../model';
import { PatchDreqReplyIn } from '../model';
import { PostDreqReplyIn } from '../model';
export declare const DreqReplyControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteDreqReply: (authorization: string, input: DeleteDreqReplyIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDreqReplyPaging: (authorization: string, dreqId?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchDreqReply: (authorization: string, input: PatchDreqReplyIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postDreqReply: (authorization: string, input: PostDreqReplyIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DreqReplyControllerApiFp: (configuration?: Configuration) => {
    deleteDreqReply(authorization: string, input: DeleteDreqReplyIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getDreqReplyPaging(authorization: string, dreqId?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetDreqReplyOut>>;
    patchDreqReply(authorization: string, input: PatchDreqReplyIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postDreqReply(authorization: string, input: PostDreqReplyIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const DreqReplyControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteDreqReply(authorization: string, input: DeleteDreqReplyIn, options?: any): AxiosPromise<void>;
    getDreqReplyPaging(authorization: string, dreqId?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetDreqReplyOut>;
    patchDreqReply(authorization: string, input: PatchDreqReplyIn, options?: any): AxiosPromise<void>;
    postDreqReply(authorization: string, input: PostDreqReplyIn, options?: any): AxiosPromise<void>;
};
export declare class DreqReplyControllerApi extends BaseAPI {
    deleteDreqReply(authorization: string, input: DeleteDreqReplyIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getDreqReplyPaging(authorization: string, dreqId?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetDreqReplyOut, any>>;
    patchDreqReply(authorization: string, input: PatchDreqReplyIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postDreqReply(authorization: string, input: PostDreqReplyIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
