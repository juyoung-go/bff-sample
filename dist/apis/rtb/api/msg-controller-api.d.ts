import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetMsgOut } from '../model';
import { PagingGetMsgOut } from '../model';
import { PatchMsgIn } from '../model';
import { PostMsgIn } from '../model';
export declare const MsgControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteMsg: (authorization: string, msgId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMsg: (authorization: string, msgId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMsgPaging: (authorization: string, langCd?: string, msgCtn?: string, msgId?: string, msgTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchMsg: (authorization: string, msgId: string, input: PatchMsgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postMsg: (authorization: string, input: PostMsgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MsgControllerApiFp: (configuration?: Configuration) => {
    deleteMsg(authorization: string, msgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getMsg(authorization: string, msgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMsgOut>>;
    getMsgPaging(authorization: string, langCd?: string, msgCtn?: string, msgId?: string, msgTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetMsgOut>>;
    patchMsg(authorization: string, msgId: string, input: PatchMsgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMsgOut>>;
    postMsg(authorization: string, input: PostMsgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const MsgControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteMsg(authorization: string, msgId: string, options?: any): AxiosPromise<void>;
    getMsg(authorization: string, msgId: string, options?: any): AxiosPromise<GetMsgOut>;
    getMsgPaging(authorization: string, langCd?: string, msgCtn?: string, msgId?: string, msgTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: any): AxiosPromise<PagingGetMsgOut>;
    patchMsg(authorization: string, msgId: string, input: PatchMsgIn, options?: any): AxiosPromise<GetMsgOut>;
    postMsg(authorization: string, input: PostMsgIn, options?: any): AxiosPromise<void>;
};
export declare class MsgControllerApi extends BaseAPI {
    deleteMsg(authorization: string, msgId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getMsg(authorization: string, msgId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetMsgOut, any>>;
    getMsgPaging(authorization: string, langCd?: string, msgCtn?: string, msgId?: string, msgTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetMsgOut, any>>;
    patchMsg(authorization: string, msgId: string, input: PatchMsgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetMsgOut, any>>;
    postMsg(authorization: string, input: PostMsgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
