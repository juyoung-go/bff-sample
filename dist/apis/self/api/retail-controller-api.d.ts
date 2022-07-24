import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
export declare const RetailControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getProductDetail: (prdId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const RetailControllerApiFp: (configuration?: Configuration) => {
    getProductDetail(prdId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const RetailControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getProductDetail(prdId: string, options?: any): AxiosPromise<string>;
};
export interface RetailControllerApiInterface {
    getProductDetail(prdId: string, options?: AxiosRequestConfig): AxiosPromise<string>;
}
export declare class RetailControllerApi extends BaseAPI implements RetailControllerApiInterface {
    getProductDetail(prdId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
