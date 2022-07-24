import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetLeaseClnCusOut } from '../model';
import { GetLeaseClnExclBldOut } from '../model';
import { GetLeaseDetailOut } from '../model';
import { GetLeaseRealtorClnCusOut } from '../model';
import { GtdTaskMst } from '../model';
import { PagingGetContrListOut } from '../model';
import { PagingGetLeaseListOut } from '../model';
import { PagingGetLeaseWorkHstOut } from '../model';
import { PatchLeaseIn } from '../model';
import { PatchLeaseWorkHstIn } from '../model';
import { PostLeaseClnIn } from '../model';
import { PostLeaseCusIn } from '../model';
import { PostLeaseIn } from '../model';
import { PostLeaseWorkHstIn } from '../model';
export declare const LwhLeaseControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteLwhLease: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteLwhLeaseCln: (authorization: string, clnId?: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteLwhLeaseCus: (authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteLwhLeaseRealtorCln: (authorization: string, clnId?: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteLwhLeaseRealtorCus: (authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteLwhLeaseWorkHst: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeaseClnCus: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeaseClnExclBld: (authorization: string, clnId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeaseClnName: (authorization: string, clnId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeaseContrList: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeaseDetail: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeasePaging: (authorization: string, clnId?: string, clnName?: string, contrYn?: string, ldealStatCd?: Array<string>, lmUserId?: string, maxLDealCmplDy?: string, maxLDealRegDy?: string, maxTipRegDy?: string, minLDealCmplDy?: string, minLDealRegDy?: string, minTipRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, statCd?: Array<string>, taskName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeaseRealtorClnCus: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhLeaseWorkHst: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchLwhLease: (authorization: string, taskId: string, input: PatchLeaseIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchLwhLeaseCusRel: (authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchLwhLeaseRealtorCusRel: (authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchLwhLeaseWorkHst: (authorization: string, chdTaskId: string, taskId: string, input: PatchLeaseWorkHstIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhLease: (authorization: string, input: PostLeaseIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhLeaseCln: (authorization: string, taskId: string, input: PostLeaseClnIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhLeaseCus: (authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhLeaseRealtorCln: (authorization: string, taskId: string, input: PostLeaseClnIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhLeaseRealtorCus: (authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhLeaseWorkHst: (authorization: string, taskId: string, input: PostLeaseWorkHstIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const LwhLeaseControllerApiFp: (configuration?: Configuration) => {
    deleteLwhLease(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    deleteLwhLeaseCln(authorization: string, clnId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    deleteLwhLeaseCus(authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    deleteLwhLeaseRealtorCln(authorization: string, clnId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    deleteLwhLeaseRealtorCus(authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    deleteLwhLeaseWorkHst(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getLwhLeaseClnCus(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLeaseClnCusOut>>;
    getLwhLeaseClnExclBld(authorization: string, clnId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetLeaseClnExclBldOut>>>;
    getLwhLeaseClnName(authorization: string, clnId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getLwhLeaseContrList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetContrListOut>>;
    getLwhLeaseDetail(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLeaseDetailOut>>;
    getLwhLeasePaging(authorization: string, clnId?: string, clnName?: string, contrYn?: string, ldealStatCd?: Array<string>, lmUserId?: string, maxLDealCmplDy?: string, maxLDealRegDy?: string, maxTipRegDy?: string, minLDealCmplDy?: string, minLDealRegDy?: string, minTipRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, statCd?: Array<string>, taskName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetLeaseListOut>>;
    getLwhLeaseRealtorClnCus(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetLeaseRealtorClnCusOut>>;
    getLwhLeaseWorkHst(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetLeaseWorkHstOut>>;
    patchLwhLease(authorization: string, taskId: string, input: PatchLeaseIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    patchLwhLeaseCusRel(authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    patchLwhLeaseRealtorCusRel(authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    patchLwhLeaseWorkHst(authorization: string, chdTaskId: string, taskId: string, input: PatchLeaseWorkHstIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    postLwhLease(authorization: string, input: PostLeaseIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdTaskMst>>;
    postLwhLeaseCln(authorization: string, taskId: string, input: PostLeaseClnIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    postLwhLeaseCus(authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    postLwhLeaseRealtorCln(authorization: string, taskId: string, input: PostLeaseClnIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    postLwhLeaseRealtorCus(authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    postLwhLeaseWorkHst(authorization: string, taskId: string, input: PostLeaseWorkHstIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const LwhLeaseControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteLwhLease(authorization: string, taskId: string, options?: any): AxiosPromise<number>;
    deleteLwhLeaseCln(authorization: string, clnId?: string, taskId?: string, options?: any): AxiosPromise<number>;
    deleteLwhLeaseCus(authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: any): AxiosPromise<number>;
    deleteLwhLeaseRealtorCln(authorization: string, clnId?: string, taskId?: string, options?: any): AxiosPromise<number>;
    deleteLwhLeaseRealtorCus(authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: any): AxiosPromise<number>;
    deleteLwhLeaseWorkHst(authorization: string, taskId: string, options?: any): AxiosPromise<number>;
    getLwhLeaseClnCus(authorization: string, taskId: string, options?: any): AxiosPromise<GetLeaseClnCusOut>;
    getLwhLeaseClnExclBld(authorization: string, clnId?: string, options?: any): AxiosPromise<Array<GetLeaseClnExclBldOut>>;
    getLwhLeaseClnName(authorization: string, clnId: string, options?: any): AxiosPromise<string>;
    getLwhLeaseContrList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: any): AxiosPromise<PagingGetContrListOut>;
    getLwhLeaseDetail(authorization: string, taskId: string, options?: any): AxiosPromise<GetLeaseDetailOut>;
    getLwhLeasePaging(authorization: string, clnId?: string, clnName?: string, contrYn?: string, ldealStatCd?: Array<string>, lmUserId?: string, maxLDealCmplDy?: string, maxLDealRegDy?: string, maxTipRegDy?: string, minLDealCmplDy?: string, minLDealRegDy?: string, minTipRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, statCd?: Array<string>, taskName?: string, options?: any): AxiosPromise<PagingGetLeaseListOut>;
    getLwhLeaseRealtorClnCus(authorization: string, taskId: string, options?: any): AxiosPromise<GetLeaseRealtorClnCusOut>;
    getLwhLeaseWorkHst(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: any): AxiosPromise<PagingGetLeaseWorkHstOut>;
    patchLwhLease(authorization: string, taskId: string, input: PatchLeaseIn, options?: any): AxiosPromise<number>;
    patchLwhLeaseCusRel(authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: any): AxiosPromise<number>;
    patchLwhLeaseRealtorCusRel(authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: any): AxiosPromise<number>;
    patchLwhLeaseWorkHst(authorization: string, chdTaskId: string, taskId: string, input: PatchLeaseWorkHstIn, options?: any): AxiosPromise<number>;
    postLwhLease(authorization: string, input: PostLeaseIn, options?: any): AxiosPromise<GtdTaskMst>;
    postLwhLeaseCln(authorization: string, taskId: string, input: PostLeaseClnIn, options?: any): AxiosPromise<number>;
    postLwhLeaseCus(authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: any): AxiosPromise<number>;
    postLwhLeaseRealtorCln(authorization: string, taskId: string, input: PostLeaseClnIn, options?: any): AxiosPromise<number>;
    postLwhLeaseRealtorCus(authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: any): AxiosPromise<number>;
    postLwhLeaseWorkHst(authorization: string, taskId: string, input: PostLeaseWorkHstIn, options?: any): AxiosPromise<number>;
};
export declare class LwhLeaseControllerApi extends BaseAPI {
    deleteLwhLease(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    deleteLwhLeaseCln(authorization: string, clnId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    deleteLwhLeaseCus(authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    deleteLwhLeaseRealtorCln(authorization: string, clnId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    deleteLwhLeaseRealtorCus(authorization: string, clnId?: string, cusId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    deleteLwhLeaseWorkHst(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getLwhLeaseClnCus(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetLeaseClnCusOut, any>>;
    getLwhLeaseClnExclBld(authorization: string, clnId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetLeaseClnExclBldOut[], any>>;
    getLwhLeaseClnName(authorization: string, clnId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getLwhLeaseContrList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetContrListOut, any>>;
    getLwhLeaseDetail(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetLeaseDetailOut, any>>;
    getLwhLeasePaging(authorization: string, clnId?: string, clnName?: string, contrYn?: string, ldealStatCd?: Array<string>, lmUserId?: string, maxLDealCmplDy?: string, maxLDealRegDy?: string, maxTipRegDy?: string, minLDealCmplDy?: string, minLDealRegDy?: string, minTipRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, statCd?: Array<string>, taskName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetLeaseListOut, any>>;
    getLwhLeaseRealtorClnCus(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetLeaseRealtorClnCusOut, any>>;
    getLwhLeaseWorkHst(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetLeaseWorkHstOut, any>>;
    patchLwhLease(authorization: string, taskId: string, input: PatchLeaseIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    patchLwhLeaseCusRel(authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    patchLwhLeaseRealtorCusRel(authorization: string, clnId?: string, cusId?: string, cusRelCd?: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    patchLwhLeaseWorkHst(authorization: string, chdTaskId: string, taskId: string, input: PatchLeaseWorkHstIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    postLwhLease(authorization: string, input: PostLeaseIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdTaskMst, any>>;
    postLwhLeaseCln(authorization: string, taskId: string, input: PostLeaseClnIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    postLwhLeaseCus(authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    postLwhLeaseRealtorCln(authorization: string, taskId: string, input: PostLeaseClnIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    postLwhLeaseRealtorCus(authorization: string, clnId: string, taskId: string, input: PostLeaseCusIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    postLwhLeaseWorkHst(authorization: string, taskId: string, input: PostLeaseWorkHstIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
