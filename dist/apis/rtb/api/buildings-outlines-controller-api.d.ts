import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
export declare const BuildingsOutlinesControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    copyIn: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    copyOut: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BuildingsOutlinesControllerApiFp: (configuration?: Configuration) => {
    copyIn(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    copyOut(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const BuildingsOutlinesControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    copyIn(authorization: string, options?: any): AxiosPromise<number>;
    copyOut(authorization: string, options?: any): AxiosPromise<number>;
};
export declare class BuildingsOutlinesControllerApi extends BaseAPI {
    copyIn(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    copyOut(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
