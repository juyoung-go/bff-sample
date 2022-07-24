import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetOtreqAssignOut } from '../model';
import { PostOtreqUpdateIn } from '../model';
import { PostPfIclWorkAssignIn } from '../model';
import { PostReqIclWorkIn } from '../model';
export declare const OtreqAssignControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getPfChkOtreqAssignPaging: (authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPhtShtOtreqAssignPaging: (authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdChkOtreqAssignPaging: (authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postIclWorkPtbCheck: (authorization: string, input: PostPfIclWorkAssignIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postOtReqIclWork: (authorization: string, input: PostReqIclWorkIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postOtreqDelete: (authorization: string, input: PostOtreqUpdateIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postOtreqUpdate: (authorization: string, input: PostOtreqUpdateIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postPfIclWorkAssign: (authorization: string, input: PostPfIclWorkAssignIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const OtreqAssignControllerApiFp: (configuration?: Configuration) => {
    getPfChkOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetOtreqAssignOut>>;
    getPhtShtOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetOtreqAssignOut>>;
    getPrdChkOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetOtreqAssignOut>>;
    postIclWorkPtbCheck(authorization: string, input: PostPfIclWorkAssignIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>>;
    postOtReqIclWork(authorization: string, input: PostReqIclWorkIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postOtreqDelete(authorization: string, input: PostOtreqUpdateIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postOtreqUpdate(authorization: string, input: PostOtreqUpdateIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postPfIclWorkAssign(authorization: string, input: PostPfIclWorkAssignIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const OtreqAssignControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getPfChkOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: any): AxiosPromise<PagingGetOtreqAssignOut>;
    getPhtShtOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: any): AxiosPromise<PagingGetOtreqAssignOut>;
    getPrdChkOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: any): AxiosPromise<PagingGetOtreqAssignOut>;
    postIclWorkPtbCheck(authorization: string, input: PostPfIclWorkAssignIn, options?: any): AxiosPromise<Array<string>>;
    postOtReqIclWork(authorization: string, input: PostReqIclWorkIn, options?: any): AxiosPromise<void>;
    postOtreqDelete(authorization: string, input: PostOtreqUpdateIn, options?: any): AxiosPromise<void>;
    postOtreqUpdate(authorization: string, input: PostOtreqUpdateIn, options?: any): AxiosPromise<void>;
    postPfIclWorkAssign(authorization: string, input: PostPfIclWorkAssignIn, options?: any): AxiosPromise<string>;
};
export declare class OtreqAssignControllerApi extends BaseAPI {
    getPfChkOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetOtreqAssignOut, any>>;
    getPhtShtOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetOtreqAssignOut, any>>;
    getPrdChkOtreqAssignPaging(authorization: string, iclTaskStatCd?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workPtbUserYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetOtreqAssignOut, any>>;
    postIclWorkPtbCheck(authorization: string, input: PostPfIclWorkAssignIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string[], any>>;
    postOtReqIclWork(authorization: string, input: PostReqIclWorkIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postOtreqDelete(authorization: string, input: PostOtreqUpdateIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postOtreqUpdate(authorization: string, input: PostOtreqUpdateIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postPfIclWorkAssign(authorization: string, input: PostPfIclWorkAssignIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
