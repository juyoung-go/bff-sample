import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
export declare const CallRecControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    postCallRec: (authorization: string, input: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postCallRecEmptyBody: (authorization: string, input: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const CallRecControllerApiFp: (configuration?: Configuration) => {
    postCallRec(authorization: string, input: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postCallRecEmptyBody(authorization: string, input: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const CallRecControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    postCallRec(authorization: string, input: string, options?: any): AxiosPromise<void>;
    postCallRecEmptyBody(authorization: string, input: string, options?: any): AxiosPromise<void>;
};
export declare class CallRecControllerApi extends BaseAPI {
    postCallRec(authorization: string, input: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postCallRecEmptyBody(authorization: string, input: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
