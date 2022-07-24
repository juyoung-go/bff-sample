import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { AddrInfo } from '../model';
import { GetPnuOut } from '../model';
import { ObjPnuBldRel } from '../model';
export declare const PnuControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getBld1: (authorization: string, pnuId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPnuBldRelCheck: (authorization: string, pnuId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPnuLwhRelCheck: (authorization: string, pnuId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postPnuIn: (authorization: string, input: AddrInfo, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    realPnuCheck: (authorization: string, bjdcdId?: string, bonBunji?: string, buBunji?: string, govPnuId?: string, newPnuId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const PnuControllerApiFp: (configuration?: Configuration) => {
    getBld1(authorization: string, pnuId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPnuOut>>;
    getPnuBldRelCheck(authorization: string, pnuId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ObjPnuBldRel>>>;
    getPnuLwhRelCheck(authorization: string, pnuId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ObjPnuBldRel>>>;
    postPnuIn(authorization: string, input: AddrInfo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    realPnuCheck(authorization: string, bjdcdId?: string, bonBunji?: string, buBunji?: string, govPnuId?: string, newPnuId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const PnuControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getBld1(authorization: string, pnuId: string, options?: any): AxiosPromise<GetPnuOut>;
    getPnuBldRelCheck(authorization: string, pnuId?: string, options?: any): AxiosPromise<Array<ObjPnuBldRel>>;
    getPnuLwhRelCheck(authorization: string, pnuId?: string, options?: any): AxiosPromise<Array<ObjPnuBldRel>>;
    postPnuIn(authorization: string, input: AddrInfo, options?: any): AxiosPromise<void>;
    realPnuCheck(authorization: string, bjdcdId?: string, bonBunji?: string, buBunji?: string, govPnuId?: string, newPnuId?: string, options?: any): AxiosPromise<string>;
};
export declare class PnuControllerApi extends BaseAPI {
    getBld1(authorization: string, pnuId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetPnuOut, any>>;
    getPnuBldRelCheck(authorization: string, pnuId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ObjPnuBldRel[], any>>;
    getPnuLwhRelCheck(authorization: string, pnuId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ObjPnuBldRel[], any>>;
    postPnuIn(authorization: string, input: AddrInfo, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    realPnuCheck(authorization: string, bjdcdId?: string, bonBunji?: string, buBunji?: string, govPnuId?: string, newPnuId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
