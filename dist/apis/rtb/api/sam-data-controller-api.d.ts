import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetSampleGeojsonOut } from '../model';
import { PagingGetSamDataOut } from '../model';
export declare const SamDataControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getSamDataListPagingUsingGET: (authorization: string, etc?: string, id?: string, orderBy?: string, pageNum?: number, pageSize?: number, yn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSampleMapData: (authorization: string, pnu?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    renderUsingGET: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SamDataControllerApiFp: (configuration?: Configuration) => {
    getSamDataListPagingUsingGET(authorization: string, etc?: string, id?: string, orderBy?: string, pageNum?: number, pageSize?: number, yn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSamDataOut>>;
    getSampleMapData(authorization: string, pnu?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSampleGeojsonOut>>;
    renderUsingGET(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const SamDataControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getSamDataListPagingUsingGET(authorization: string, etc?: string, id?: string, orderBy?: string, pageNum?: number, pageSize?: number, yn?: string, options?: any): AxiosPromise<PagingGetSamDataOut>;
    getSampleMapData(authorization: string, pnu?: string, options?: any): AxiosPromise<GetSampleGeojsonOut>;
    renderUsingGET(authorization: string, options?: any): AxiosPromise<string>;
};
export declare class SamDataControllerApi extends BaseAPI {
    getSamDataListPagingUsingGET(authorization: string, etc?: string, id?: string, orderBy?: string, pageNum?: number, pageSize?: number, yn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSamDataOut, any>>;
    getSampleMapData(authorization: string, pnu?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSampleGeojsonOut, any>>;
    renderUsingGET(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
