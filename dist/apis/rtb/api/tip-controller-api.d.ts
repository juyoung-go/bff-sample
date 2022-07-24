import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetTipWithDistinctRelCd } from '../model';
import { MtaTipMst } from '../model';
import { PagingGetTipOut } from '../model';
import { PatchTipIn } from '../model';
import { SaveTipIn } from '../model';
export declare const TipControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteTip: (authorization: string, tipId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAllTips: (authorization: string, maxRegDy?: string, minRegDy?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, tgtName?: string, tipCtn?: string, tipTgtRelCd?: string, userDeptName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchTip: (authorization: string, tipId: string, input: PatchTipIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postTip: (authorization: string, input: SaveTipIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectTipPaging: (authorization: string, dtlId?: string, orderBy?: string, pageNum?: number, pageSize?: number, serviceCd?: string, tgtId?: string, tipTgtRelCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const TipControllerApiFp: (configuration?: Configuration) => {
    deleteTip(authorization: string, tipId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAllTips(authorization: string, maxRegDy?: string, minRegDy?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, tgtName?: string, tipCtn?: string, tipTgtRelCd?: string, userDeptName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTipWithDistinctRelCd>>;
    patchTip(authorization: string, tipId: string, input: PatchTipIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MtaTipMst>>;
    postTip(authorization: string, input: SaveTipIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MtaTipMst>>;
    selectTipPaging(authorization: string, dtlId?: string, orderBy?: string, pageNum?: number, pageSize?: number, serviceCd?: string, tgtId?: string, tipTgtRelCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetTipOut>>;
};
export declare const TipControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteTip(authorization: string, tipId: string, options?: any): AxiosPromise<void>;
    getAllTips(authorization: string, maxRegDy?: string, minRegDy?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, tgtName?: string, tipCtn?: string, tipTgtRelCd?: string, userDeptName?: string, options?: any): AxiosPromise<GetTipWithDistinctRelCd>;
    patchTip(authorization: string, tipId: string, input: PatchTipIn, options?: any): AxiosPromise<MtaTipMst>;
    postTip(authorization: string, input: SaveTipIn, options?: any): AxiosPromise<MtaTipMst>;
    selectTipPaging(authorization: string, dtlId?: string, orderBy?: string, pageNum?: number, pageSize?: number, serviceCd?: string, tgtId?: string, tipTgtRelCd?: string, options?: any): AxiosPromise<PagingGetTipOut>;
};
export declare class TipControllerApi extends BaseAPI {
    deleteTip(authorization: string, tipId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getAllTips(authorization: string, maxRegDy?: string, minRegDy?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, tgtName?: string, tipCtn?: string, tipTgtRelCd?: string, userDeptName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetTipWithDistinctRelCd, any>>;
    patchTip(authorization: string, tipId: string, input: PatchTipIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MtaTipMst, any>>;
    postTip(authorization: string, input: SaveTipIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MtaTipMst, any>>;
    selectTipPaging(authorization: string, dtlId?: string, orderBy?: string, pageNum?: number, pageSize?: number, serviceCd?: string, tgtId?: string, tipTgtRelCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetTipOut, any>>;
}
