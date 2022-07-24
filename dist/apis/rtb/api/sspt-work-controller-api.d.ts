import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GtdTaskMst } from '../model';
import { PagingGetClnwkPagingOut } from '../model';
import { PagingGetCrmothwkPagingOut } from '../model';
import { PatchClnwkIn } from '../model';
import { PatchCrmothwkIn } from '../model';
import { ReqCrmWorkIn } from '../model';
import { SaveClnwkIn } from '../model';
export declare const SsptWorkControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteClnwk: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteCrmWork: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getClnwkPaging: (authorization: string, clnId?: string, clnwkStatCd?: string, maxCmplDy?: string, maxExpireDy?: string, maxRegDy?: string, minCmplDy?: string, minExpireDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptbId?: string, taskCfCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCrmothwkPaging: (authorization: string, crmothwkStatCd?: string, maxCmplDy?: string, maxRegDy?: string, minCmplDy?: string, minRegDy?: string, myTaskYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, regDeptId?: string, regUserId?: string, taskCfCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchClnwk: (authorization: string, taskId: string, input: PatchClnwkIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchCrmWork: (authorization: string, taskId: string, input: PatchCrmothwkIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postClnwk: (authorization: string, input: SaveClnwkIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    reqCrmWork: (authorization: string, input: ReqCrmWorkIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SsptWorkControllerApiFp: (configuration?: Configuration) => {
    deleteClnwk(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteCrmWork(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getClnwkPaging(authorization: string, clnId?: string, clnwkStatCd?: string, maxCmplDy?: string, maxExpireDy?: string, maxRegDy?: string, minCmplDy?: string, minExpireDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptbId?: string, taskCfCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetClnwkPagingOut>>;
    getCrmothwkPaging(authorization: string, crmothwkStatCd?: string, maxCmplDy?: string, maxRegDy?: string, minCmplDy?: string, minRegDy?: string, myTaskYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, regDeptId?: string, regUserId?: string, taskCfCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetCrmothwkPagingOut>>;
    patchClnwk(authorization: string, taskId: string, input: PatchClnwkIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdTaskMst>>;
    patchCrmWork(authorization: string, taskId: string, input: PatchCrmothwkIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdTaskMst>>;
    postClnwk(authorization: string, input: SaveClnwkIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    reqCrmWork(authorization: string, input: ReqCrmWorkIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdTaskMst>>;
};
export declare const SsptWorkControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteClnwk(authorization: string, taskId: string, options?: any): AxiosPromise<void>;
    deleteCrmWork(authorization: string, taskId: string, options?: any): AxiosPromise<void>;
    getClnwkPaging(authorization: string, clnId?: string, clnwkStatCd?: string, maxCmplDy?: string, maxExpireDy?: string, maxRegDy?: string, minCmplDy?: string, minExpireDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptbId?: string, taskCfCd?: string, options?: any): AxiosPromise<PagingGetClnwkPagingOut>;
    getCrmothwkPaging(authorization: string, crmothwkStatCd?: string, maxCmplDy?: string, maxRegDy?: string, minCmplDy?: string, minRegDy?: string, myTaskYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, regDeptId?: string, regUserId?: string, taskCfCd?: string, options?: any): AxiosPromise<PagingGetCrmothwkPagingOut>;
    patchClnwk(authorization: string, taskId: string, input: PatchClnwkIn, options?: any): AxiosPromise<GtdTaskMst>;
    patchCrmWork(authorization: string, taskId: string, input: PatchCrmothwkIn, options?: any): AxiosPromise<GtdTaskMst>;
    postClnwk(authorization: string, input: SaveClnwkIn, options?: any): AxiosPromise<number>;
    reqCrmWork(authorization: string, input: ReqCrmWorkIn, options?: any): AxiosPromise<GtdTaskMst>;
};
export declare class SsptWorkControllerApi extends BaseAPI {
    deleteClnwk(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteCrmWork(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getClnwkPaging(authorization: string, clnId?: string, clnwkStatCd?: string, maxCmplDy?: string, maxExpireDy?: string, maxRegDy?: string, minCmplDy?: string, minExpireDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptbId?: string, taskCfCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetClnwkPagingOut, any>>;
    getCrmothwkPaging(authorization: string, crmothwkStatCd?: string, maxCmplDy?: string, maxRegDy?: string, minCmplDy?: string, minRegDy?: string, myTaskYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, regDeptId?: string, regUserId?: string, taskCfCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetCrmothwkPagingOut, any>>;
    patchClnwk(authorization: string, taskId: string, input: PatchClnwkIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdTaskMst, any>>;
    patchCrmWork(authorization: string, taskId: string, input: PatchCrmothwkIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdTaskMst, any>>;
    postClnwk(authorization: string, input: SaveClnwkIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    reqCrmWork(authorization: string, input: ReqCrmWorkIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdTaskMst, any>>;
}
