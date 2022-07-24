import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetCandtOut } from '../model';
import { PagingGetCandtOut } from '../model';
import { PatchCandtIn } from '../model';
export declare const CandtControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getCandtList: (authorization: string, rntId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCandtOne: (authorization: string, candtId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCandtPaging: (authorization: string, candtName?: string, email?: string, maxApexDy?: string, minApexDy?: string, mobNum?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntResCd?: string, rrtJbgrpCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchCandt: (authorization: string, input: PatchCandtIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const CandtControllerApiFp: (configuration?: Configuration) => {
    getCandtList(authorization: string, rntId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCandtOut>>>;
    getCandtOne(authorization: string, candtId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCandtOut>>;
    getCandtPaging(authorization: string, candtName?: string, email?: string, maxApexDy?: string, minApexDy?: string, mobNum?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntResCd?: string, rrtJbgrpCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetCandtOut>>;
    patchCandt(authorization: string, input: PatchCandtIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const CandtControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getCandtList(authorization: string, rntId?: string, options?: any): AxiosPromise<Array<GetCandtOut>>;
    getCandtOne(authorization: string, candtId: string, options?: any): AxiosPromise<GetCandtOut>;
    getCandtPaging(authorization: string, candtName?: string, email?: string, maxApexDy?: string, minApexDy?: string, mobNum?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntResCd?: string, rrtJbgrpCd?: string, options?: any): AxiosPromise<PagingGetCandtOut>;
    patchCandt(authorization: string, input: PatchCandtIn, options?: any): AxiosPromise<void>;
};
export declare class CandtControllerApi extends BaseAPI {
    getCandtList(authorization: string, rntId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCandtOut[], any>>;
    getCandtOne(authorization: string, candtId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCandtOut, any>>;
    getCandtPaging(authorization: string, candtName?: string, email?: string, maxApexDy?: string, minApexDy?: string, mobNum?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntResCd?: string, rrtJbgrpCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetCandtOut, any>>;
    patchCandt(authorization: string, input: PatchCandtIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
