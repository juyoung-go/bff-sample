import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { ModelAndView } from '../model';
import { RedirectView } from '../model';
export declare const SignControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    signInFailUsingGET: (authorization: string, errCd: string, errMsg: string, redirectUrl: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    signInUsingGET: (authorization: string, appName: string, redirectUri: string, serviceCd: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SignControllerApiFp: (configuration?: Configuration) => {
    signInFailUsingGET(authorization: string, errCd: string, errMsg: string, redirectUrl: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>>;
    signInUsingGET(authorization: string, appName: string, redirectUri: string, serviceCd: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RedirectView>>;
};
export declare const SignControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    signInFailUsingGET(authorization: string, errCd: string, errMsg: string, redirectUrl: string, options?: any): AxiosPromise<ModelAndView>;
    signInUsingGET(authorization: string, appName: string, redirectUri: string, serviceCd: string, options?: any): AxiosPromise<RedirectView>;
};
export declare class SignControllerApi extends BaseAPI {
    signInFailUsingGET(authorization: string, errCd: string, errMsg: string, redirectUrl: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ModelAndView, any>>;
    signInUsingGET(authorization: string, appName: string, redirectUri: string, serviceCd: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RedirectView, any>>;
}
