import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PostCallIn } from '../model';
export declare const CallControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    postCall: (authorization: string, input: PostCallIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const CallControllerApiFp: (configuration?: Configuration) => {
    postCall(authorization: string, input: PostCallIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const CallControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    postCall(authorization: string, input: PostCallIn, options?: any): AxiosPromise<string>;
};
export declare class CallControllerApi extends BaseAPI {
    postCall(authorization: string, input: PostCallIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
