import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetAndroidInfoOut } from '../model';
export declare const AndroidControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    apkUpload: (authorization: string, file?: any, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    gerCurrentAppVersion: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAndroidInfo: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDownloadUrl: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AndroidControllerApiFp: (configuration?: Configuration) => {
    apkUpload(authorization: string, file?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
    gerCurrentAppVersion(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getAndroidInfo(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAndroidInfoOut>>;
    getDownloadUrl(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const AndroidControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    apkUpload(authorization: string, file?: any, options?: any): AxiosPromise<boolean>;
    gerCurrentAppVersion(authorization: string, options?: any): AxiosPromise<string>;
    getAndroidInfo(authorization: string, options?: any): AxiosPromise<GetAndroidInfoOut>;
    getDownloadUrl(authorization: string, options?: any): AxiosPromise<string>;
};
export declare class AndroidControllerApi extends BaseAPI {
    apkUpload(authorization: string, file?: any, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
    gerCurrentAppVersion(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getAndroidInfo(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetAndroidInfoOut, any>>;
    getDownloadUrl(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
