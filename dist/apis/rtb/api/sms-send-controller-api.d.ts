import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { CancelSmsSendReqIn } from '../model';
import { GetCdOut } from '../model';
import { GetSmsRcvrOut } from '../model';
import { PagingGetSmsBldConOut } from '../model';
import { PagingGetSmsClnCusOut } from '../model';
import { PagingGetSmsErrOut } from '../model';
import { PagingGetSmsSendByRcvrTypeAndPkOut } from '../model';
import { PagingGetSmsSendReqOut } from '../model';
import { PostSmsSendReqIn } from '../model';
export declare const SmsSendControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getBldClnNumRcvr: (authorization: string, bldId?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, typeCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getClnNumRcvr: (authorization: string, bselInChrgYn?: string, clnId?: Array<string>, furInChrgYn?: string, intInChrgYn?: string, leaseInChrgYn?: string, lwhLeaseInChrgYn?: string, lwhRentInChrgYn?: string, mptbYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rentInChrgYn?: string, someInChrgExistYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCoMngLev: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMngExceptTgt: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsBldConPaging1: (authorization: string, bjdCd?: Array<string>, bldConOwnTypeCd?: string, bltypDtlId?: string, bltypId?: Array<string>, mainNumYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, validNumYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsClnCus1: (authorization: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsErrList: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsSendReqSeq?: number, smsTmplId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsSendsByRcvrTypeAndPk: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParType?: string, rcvrPk?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsSendsResult: (authorization: string, createUserId?: Array<string>, maxCompDy?: string, maxReqDy?: string, minCompDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSmsSendsWait: (authorization: string, createUserId?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchSmsSendCancel: (authorization: string, input: CancelSmsSendReqIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postSmsSends: (authorization: string, input: PostSmsSendReqIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SmsSendControllerApiFp: (configuration?: Configuration) => {
    getBldClnNumRcvr(authorization: string, bldId?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, typeCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSmsRcvrOut>>>;
    getClnNumRcvr(authorization: string, bselInChrgYn?: string, clnId?: Array<string>, furInChrgYn?: string, intInChrgYn?: string, leaseInChrgYn?: string, lwhLeaseInChrgYn?: string, lwhRentInChrgYn?: string, mptbYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rentInChrgYn?: string, someInChrgExistYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSmsRcvrOut>>>;
    getCoMngLev(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCdOut>>>;
    getMngExceptTgt(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCdOut>>>;
    getSmsBldConPaging1(authorization: string, bjdCd?: Array<string>, bldConOwnTypeCd?: string, bltypDtlId?: string, bltypId?: Array<string>, mainNumYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, validNumYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSmsBldConOut>>;
    getSmsClnCus1(authorization: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSmsClnCusOut>>;
    getSmsErrList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsSendReqSeq?: number, smsTmplId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSmsErrOut>>;
    getSmsSendsByRcvrTypeAndPk(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParType?: string, rcvrPk?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSmsSendByRcvrTypeAndPkOut>>;
    getSmsSendsResult(authorization: string, createUserId?: Array<string>, maxCompDy?: string, maxReqDy?: string, minCompDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSmsSendReqOut>>;
    getSmsSendsWait(authorization: string, createUserId?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSmsSendReqOut>>;
    patchSmsSendCancel(authorization: string, input: CancelSmsSendReqIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postSmsSends(authorization: string, input: PostSmsSendReqIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const SmsSendControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getBldClnNumRcvr(authorization: string, bldId?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, typeCd?: string, options?: any): AxiosPromise<Array<GetSmsRcvrOut>>;
    getClnNumRcvr(authorization: string, bselInChrgYn?: string, clnId?: Array<string>, furInChrgYn?: string, intInChrgYn?: string, leaseInChrgYn?: string, lwhLeaseInChrgYn?: string, lwhRentInChrgYn?: string, mptbYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rentInChrgYn?: string, someInChrgExistYn?: string, options?: any): AxiosPromise<Array<GetSmsRcvrOut>>;
    getCoMngLev(authorization: string, options?: any): AxiosPromise<Array<GetCdOut>>;
    getMngExceptTgt(authorization: string, options?: any): AxiosPromise<Array<GetCdOut>>;
    getSmsBldConPaging1(authorization: string, bjdCd?: Array<string>, bldConOwnTypeCd?: string, bltypDtlId?: string, bltypId?: Array<string>, mainNumYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, validNumYn?: string, options?: any): AxiosPromise<PagingGetSmsBldConOut>;
    getSmsClnCus1(authorization: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetSmsClnCusOut>;
    getSmsErrList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsSendReqSeq?: number, smsTmplId?: string, options?: any): AxiosPromise<PagingGetSmsErrOut>;
    getSmsSendsByRcvrTypeAndPk(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParType?: string, rcvrPk?: string, options?: any): AxiosPromise<PagingGetSmsSendByRcvrTypeAndPkOut>;
    getSmsSendsResult(authorization: string, createUserId?: Array<string>, maxCompDy?: string, maxReqDy?: string, minCompDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: any): AxiosPromise<PagingGetSmsSendReqOut>;
    getSmsSendsWait(authorization: string, createUserId?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: any): AxiosPromise<PagingGetSmsSendReqOut>;
    patchSmsSendCancel(authorization: string, input: CancelSmsSendReqIn, options?: any): AxiosPromise<void>;
    postSmsSends(authorization: string, input: PostSmsSendReqIn, options?: any): AxiosPromise<void>;
};
export declare class SmsSendControllerApi extends BaseAPI {
    getBldClnNumRcvr(authorization: string, bldId?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, typeCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSmsRcvrOut[], any>>;
    getClnNumRcvr(authorization: string, bselInChrgYn?: string, clnId?: Array<string>, furInChrgYn?: string, intInChrgYn?: string, leaseInChrgYn?: string, lwhLeaseInChrgYn?: string, lwhRentInChrgYn?: string, mptbYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rentInChrgYn?: string, someInChrgExistYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSmsRcvrOut[], any>>;
    getCoMngLev(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCdOut[], any>>;
    getMngExceptTgt(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCdOut[], any>>;
    getSmsBldConPaging1(authorization: string, bjdCd?: Array<string>, bldConOwnTypeCd?: string, bltypDtlId?: string, bltypId?: Array<string>, mainNumYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, validNumYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSmsBldConOut, any>>;
    getSmsClnCus1(authorization: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSmsClnCusOut, any>>;
    getSmsErrList(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, smsSendReqSeq?: number, smsTmplId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSmsErrOut, any>>;
    getSmsSendsByRcvrTypeAndPk(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParType?: string, rcvrPk?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSmsSendByRcvrTypeAndPkOut, any>>;
    getSmsSendsResult(authorization: string, createUserId?: Array<string>, maxCompDy?: string, maxReqDy?: string, minCompDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSmsSendReqOut, any>>;
    getSmsSendsWait(authorization: string, createUserId?: Array<string>, maxReqDy?: string, minReqDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderTelNum?: string, smsSbj?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSmsSendReqOut, any>>;
    patchSmsSendCancel(authorization: string, input: CancelSmsSendReqIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postSmsSends(authorization: string, input: PostSmsSendReqIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
