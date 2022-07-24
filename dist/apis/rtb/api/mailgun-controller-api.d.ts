import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetEmlSendReqHstOut } from '../model';
import { PatchEmlAttachCompIn } from '../model';
import { PatchEmlAttachCompOut } from '../model';
import { PostEmlSendReqHst } from '../model';
export declare const MailgunControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getEmlSendReqHstOne: (authorization: string, seq?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchEmlAttachComp: (authorization: string, input: PatchEmlAttachCompIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchEmlSendCancel: (authorization: string, emailTmplId?: string, errCd?: string, failCnt?: number, failResnCtn?: string, normProcYn?: string, sendCnt?: number, seq?: Array<number>, umsProcStatCd?: string, umsSendResCd?: string, updateDt?: string, updateUserId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postEmlSendReqHst: (authorization: string, input: PostEmlSendReqHst, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MailgunControllerApiFp: (configuration?: Configuration) => {
    getEmlSendReqHstOne(authorization: string, seq?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlSendReqHstOut>>;
    patchEmlAttachComp(authorization: string, input: PatchEmlAttachCompIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    patchEmlSendCancel(authorization: string, emailTmplId?: string, errCd?: string, failCnt?: number, failResnCtn?: string, normProcYn?: string, sendCnt?: number, seq?: Array<number>, umsProcStatCd?: string, umsSendResCd?: string, updateDt?: string, updateUserId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postEmlSendReqHst(authorization: string, input: PostEmlSendReqHst, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PatchEmlAttachCompOut>>;
};
export declare const MailgunControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getEmlSendReqHstOne(authorization: string, seq?: number, options?: any): AxiosPromise<GetEmlSendReqHstOut>;
    patchEmlAttachComp(authorization: string, input: PatchEmlAttachCompIn, options?: any): AxiosPromise<void>;
    patchEmlSendCancel(authorization: string, emailTmplId?: string, errCd?: string, failCnt?: number, failResnCtn?: string, normProcYn?: string, sendCnt?: number, seq?: Array<number>, umsProcStatCd?: string, umsSendResCd?: string, updateDt?: string, updateUserId?: string, options?: any): AxiosPromise<void>;
    postEmlSendReqHst(authorization: string, input: PostEmlSendReqHst, options?: any): AxiosPromise<PatchEmlAttachCompOut>;
};
export declare class MailgunControllerApi extends BaseAPI {
    getEmlSendReqHstOne(authorization: string, seq?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlSendReqHstOut, any>>;
    patchEmlAttachComp(authorization: string, input: PatchEmlAttachCompIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    patchEmlSendCancel(authorization: string, emailTmplId?: string, errCd?: string, failCnt?: number, failResnCtn?: string, normProcYn?: string, sendCnt?: number, seq?: Array<number>, umsProcStatCd?: string, umsSendResCd?: string, updateDt?: string, updateUserId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postEmlSendReqHst(authorization: string, input: PostEmlSendReqHst, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PatchEmlAttachCompOut, any>>;
}
