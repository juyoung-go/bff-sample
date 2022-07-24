import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { LoginLegacyIn } from '../model';
export declare const LocalLoginControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    checkHashUsingGET: (authorization: string, input: LoginLegacyIn, email?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    generateKey: (authorization: string, input: LoginLegacyIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrmtIsLocal: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    isFirstLogin: (authorization: string, email?: string, pwd?: string, rePwd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    matchedHashUsingGET: (authorization: string, pwd?: string, storedHash?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    signInByLegacy: (authorization: string, input: LoginLegacyIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const LocalLoginControllerApiFp: (configuration?: Configuration) => {
    checkHashUsingGET(authorization: string, input: LoginLegacyIn, email?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    generateKey(authorization: string, input: LoginLegacyIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getPrmtIsLocal(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    isFirstLogin(authorization: string, email?: string, pwd?: string, rePwd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    matchedHashUsingGET(authorization: string, pwd?: string, storedHash?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
    signInByLegacy(authorization: string, input: LoginLegacyIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const LocalLoginControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    checkHashUsingGET(authorization: string, input: LoginLegacyIn, email?: string, options?: any): AxiosPromise<string>;
    generateKey(authorization: string, input: LoginLegacyIn, options?: any): AxiosPromise<void>;
    getPrmtIsLocal(authorization: string, options?: any): AxiosPromise<string>;
    isFirstLogin(authorization: string, email?: string, pwd?: string, rePwd?: string, options?: any): AxiosPromise<string>;
    matchedHashUsingGET(authorization: string, pwd?: string, storedHash?: string, options?: any): AxiosPromise<boolean>;
    signInByLegacy(authorization: string, input: LoginLegacyIn, options?: any): AxiosPromise<string>;
};
export declare class LocalLoginControllerApi extends BaseAPI {
    checkHashUsingGET(authorization: string, input: LoginLegacyIn, email?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    generateKey(authorization: string, input: LoginLegacyIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getPrmtIsLocal(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    isFirstLogin(authorization: string, email?: string, pwd?: string, rePwd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    matchedHashUsingGET(authorization: string, pwd?: string, storedHash?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
    signInByLegacy(authorization: string, input: LoginLegacyIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
