import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBungDetailOut } from '../model';
import { GtdBselCdtDtl } from '../model';
import { GtdTaskMst } from '../model';
import { PagingGetBungListOut } from '../model';
import { PatchBungBasicInfoIn } from '../model';
import { PatchBungCdtInfoIn } from '../model';
import { PostBselDealUrpIn } from '../model';
import { PostBungIn } from '../model';
export declare const BungControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteBungInfo: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBungDetail: (authorization: string, taskId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBungPaging: (authorization: string, actvnsCd?: Array<string>, bungTgtCd?: Array<string>, clnName?: string, maxBlaPy?: number, maxBungAmt?: number, maxGraPy?: number, maxNlaPy?: number, maxPlaPy?: number, minBlaPy?: number, minBungAmt?: number, minGraPy?: number, minNlaPy?: number, minPlaPy?: number, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, purpsCtn?: string, regnCtn?: string, serviceCd?: string, statCd?: Array<string>, taskName?: string, tipCtn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchBungBasicInfo: (authorization: string, taskId: string, input: PatchBungBasicInfoIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchBungCdtInfo: (authorization: string, taskId: string, input: PatchBungCdtInfoIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postBung: (authorization: string, input: PostBungIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postBungUmsGrpInfo: (authorization: string, input: PostBselDealUrpIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BungControllerApiFp: (configuration?: Configuration) => {
    deleteBungInfo(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdTaskMst>>;
    getBungDetail(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBungDetailOut>>;
    getBungPaging(authorization: string, actvnsCd?: Array<string>, bungTgtCd?: Array<string>, clnName?: string, maxBlaPy?: number, maxBungAmt?: number, maxGraPy?: number, maxNlaPy?: number, maxPlaPy?: number, minBlaPy?: number, minBungAmt?: number, minGraPy?: number, minNlaPy?: number, minPlaPy?: number, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, purpsCtn?: string, regnCtn?: string, serviceCd?: string, statCd?: Array<string>, taskName?: string, tipCtn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBungListOut>>;
    patchBungBasicInfo(authorization: string, taskId: string, input: PatchBungBasicInfoIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdTaskMst>>;
    patchBungCdtInfo(authorization: string, taskId: string, input: PatchBungCdtInfoIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdBselCdtDtl>>;
    postBung(authorization: string, input: PostBungIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GtdTaskMst>>;
    postBungUmsGrpInfo(authorization: string, input: PostBselDealUrpIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const BungControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteBungInfo(authorization: string, taskId: string, options?: any): AxiosPromise<GtdTaskMst>;
    getBungDetail(authorization: string, taskId: string, options?: any): AxiosPromise<GetBungDetailOut>;
    getBungPaging(authorization: string, actvnsCd?: Array<string>, bungTgtCd?: Array<string>, clnName?: string, maxBlaPy?: number, maxBungAmt?: number, maxGraPy?: number, maxNlaPy?: number, maxPlaPy?: number, minBlaPy?: number, minBungAmt?: number, minGraPy?: number, minNlaPy?: number, minPlaPy?: number, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, purpsCtn?: string, regnCtn?: string, serviceCd?: string, statCd?: Array<string>, taskName?: string, tipCtn?: string, options?: any): AxiosPromise<PagingGetBungListOut>;
    patchBungBasicInfo(authorization: string, taskId: string, input: PatchBungBasicInfoIn, options?: any): AxiosPromise<GtdTaskMst>;
    patchBungCdtInfo(authorization: string, taskId: string, input: PatchBungCdtInfoIn, options?: any): AxiosPromise<GtdBselCdtDtl>;
    postBung(authorization: string, input: PostBungIn, options?: any): AxiosPromise<GtdTaskMst>;
    postBungUmsGrpInfo(authorization: string, input: PostBselDealUrpIn, options?: any): AxiosPromise<number>;
};
export declare class BungControllerApi extends BaseAPI {
    deleteBungInfo(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdTaskMst, any>>;
    getBungDetail(authorization: string, taskId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBungDetailOut, any>>;
    getBungPaging(authorization: string, actvnsCd?: Array<string>, bungTgtCd?: Array<string>, clnName?: string, maxBlaPy?: number, maxBungAmt?: number, maxGraPy?: number, maxNlaPy?: number, maxPlaPy?: number, minBlaPy?: number, minBungAmt?: number, minGraPy?: number, minNlaPy?: number, minPlaPy?: number, orderBy?: string, pageNum?: number, pageSize?: number, ptb?: Array<string>, purpsCtn?: string, regnCtn?: string, serviceCd?: string, statCd?: Array<string>, taskName?: string, tipCtn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBungListOut, any>>;
    patchBungBasicInfo(authorization: string, taskId: string, input: PatchBungBasicInfoIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdTaskMst, any>>;
    patchBungCdtInfo(authorization: string, taskId: string, input: PatchBungCdtInfoIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdBselCdtDtl, any>>;
    postBung(authorization: string, input: PostBungIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GtdTaskMst, any>>;
    postBungUmsGrpInfo(authorization: string, input: PostBselDealUrpIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
