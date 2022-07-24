import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
export declare const PingControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    pingUsingGET: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const PingControllerApiFp: (configuration?: Configuration) => {
    pingUsingGET(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const PingControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    pingUsingGET(authorization: string, options?: any): AxiosPromise<string>;
};
export declare class PingControllerApi extends BaseAPI {
    pingUsingGET(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
