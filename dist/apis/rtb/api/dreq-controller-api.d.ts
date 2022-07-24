import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetDreqOut } from '../model';
import { PagingGetDreqOut } from '../model';
import { PagingGetFileOut } from '../model';
import { PatchDreqIn } from '../model';
import { PostDreqIn } from '../model';
export declare const DreqControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getDreqByFile: (authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDreqById: (authorization: string, dreqId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDreqPaging: (authorization: string, apnflExistYn?: string, createUserId?: string, deptId?: string, dreqPrefRnkCd?: string, dreqStatCd?: string, dreqTypeCd?: string, maxCmplDy?: string, maxReqDy?: string, minCmplDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchDreq: (authorization: string, input: PatchDreqIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postDreq: (authorization: string, input: PostDreqIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DreqControllerApiFp: (configuration?: Configuration) => {
    getDreqByFile(authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetFileOut>>;
    getDreqById(authorization: string, dreqId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDreqOut>>;
    getDreqPaging(authorization: string, apnflExistYn?: string, createUserId?: string, deptId?: string, dreqPrefRnkCd?: string, dreqStatCd?: string, dreqTypeCd?: string, maxCmplDy?: string, maxReqDy?: string, minCmplDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetDreqOut>>;
    patchDreq(authorization: string, input: PatchDreqIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postDreq(authorization: string, input: PostDreqIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const DreqControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getDreqByFile(authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: any): AxiosPromise<PagingGetFileOut>;
    getDreqById(authorization: string, dreqId?: string, options?: any): AxiosPromise<GetDreqOut>;
    getDreqPaging(authorization: string, apnflExistYn?: string, createUserId?: string, deptId?: string, dreqPrefRnkCd?: string, dreqStatCd?: string, dreqTypeCd?: string, maxCmplDy?: string, maxReqDy?: string, minCmplDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: any): AxiosPromise<PagingGetDreqOut>;
    patchDreq(authorization: string, input: PatchDreqIn, options?: any): AxiosPromise<void>;
    postDreq(authorization: string, input: PostDreqIn, options?: any): AxiosPromise<string>;
};
export declare class DreqControllerApi extends BaseAPI {
    getDreqByFile(authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetFileOut, any>>;
    getDreqById(authorization: string, dreqId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDreqOut, any>>;
    getDreqPaging(authorization: string, apnflExistYn?: string, createUserId?: string, deptId?: string, dreqPrefRnkCd?: string, dreqStatCd?: string, dreqTypeCd?: string, maxCmplDy?: string, maxReqDy?: string, minCmplDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetDreqOut, any>>;
    patchDreq(authorization: string, input: PatchDreqIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postDreq(authorization: string, input: PostDreqIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
