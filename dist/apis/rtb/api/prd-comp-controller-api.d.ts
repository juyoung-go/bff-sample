import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetPrdCompIn } from '../model';
import { Resource } from '../model';
export declare const PrdCompControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    prdCompBselExcelDownload: (authorization: string, input: GetPrdCompIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    prdCompExcelDownload: (authorization: string, input: GetPrdCompIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const PrdCompControllerApiFp: (configuration?: Configuration) => {
    prdCompBselExcelDownload(authorization: string, input: GetPrdCompIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
    prdCompExcelDownload(authorization: string, input: GetPrdCompIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
};
export declare const PrdCompControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    prdCompBselExcelDownload(authorization: string, input: GetPrdCompIn, options?: any): AxiosPromise<Resource>;
    prdCompExcelDownload(authorization: string, input: GetPrdCompIn, options?: any): AxiosPromise<Resource>;
};
export declare class PrdCompControllerApi extends BaseAPI {
    prdCompBselExcelDownload(authorization: string, input: GetPrdCompIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
    prdCompExcelDownload(authorization: string, input: GetPrdCompIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
}
