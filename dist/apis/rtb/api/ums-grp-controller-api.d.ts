import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetUmsGrpOut } from '../model';
export declare const UmsGrpControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getUmsGrp: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, urpCd?: string, urpName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const UmsGrpControllerApiFp: (configuration?: Configuration) => {
    getUmsGrp(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, urpCd?: string, urpName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetUmsGrpOut>>;
};
export declare const UmsGrpControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getUmsGrp(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, urpCd?: string, urpName?: string, options?: any): AxiosPromise<PagingGetUmsGrpOut>;
};
export declare class UmsGrpControllerApi extends BaseAPI {
    getUmsGrp(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, urpCd?: string, urpName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetUmsGrpOut, any>>;
}
