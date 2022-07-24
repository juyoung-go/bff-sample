import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { RedirectView } from '../model';
import { SignInByAndroidOut } from '../model';
export declare const AuthControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getTokenForDevelopUsingGET: (authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    googleCallbackUsingGET: (authorization: string, code: string, state: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    signInByAndroidUsingPOST: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    signInUsingPOST: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    verifyUsingGET: (authorization: string, token?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AuthControllerApiFp: (configuration?: Configuration) => {
    getTokenForDevelopUsingGET(authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    googleCallbackUsingGET(authorization: string, code: string, state: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RedirectView>>;
    signInByAndroidUsingPOST(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignInByAndroidOut>>;
    signInUsingPOST(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    verifyUsingGET(authorization: string, token?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const AuthControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getTokenForDevelopUsingGET(authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options?: any): AxiosPromise<string>;
    googleCallbackUsingGET(authorization: string, code: string, state: string, options?: any): AxiosPromise<RedirectView>;
    signInByAndroidUsingPOST(authorization: string, options?: any): AxiosPromise<SignInByAndroidOut>;
    signInUsingPOST(authorization: string, options?: any): AxiosPromise<string>;
    verifyUsingGET(authorization: string, token?: string, options?: any): AxiosPromise<string>;
};
export declare class AuthControllerApi extends BaseAPI {
    getTokenForDevelopUsingGET(authorization: string, code: string, email: string, mobYn: string, wpiYn: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    googleCallbackUsingGET(authorization: string, code: string, state: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RedirectView, any>>;
    signInByAndroidUsingPOST(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SignInByAndroidOut, any>>;
    signInUsingPOST(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    verifyUsingGET(authorization: string, token?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
