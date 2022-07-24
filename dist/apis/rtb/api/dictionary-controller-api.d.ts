import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { SelectDictionaryMobOut } from '../model';
import { SelectDictionaryOut } from '../model';
export declare const DictionaryControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getDictionary: (authorization: string, langCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDictionaryMob: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DictionaryControllerApiFp: (configuration?: Configuration) => {
    getDictionary(authorization: string, langCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SelectDictionaryOut>>;
    getDictionaryMob(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SelectDictionaryMobOut>>;
};
export declare const DictionaryControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getDictionary(authorization: string, langCd?: string, options?: any): AxiosPromise<SelectDictionaryOut>;
    getDictionaryMob(authorization: string, options?: any): AxiosPromise<SelectDictionaryMobOut>;
};
export declare class DictionaryControllerApi extends BaseAPI {
    getDictionary(authorization: string, langCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SelectDictionaryOut, any>>;
    getDictionaryMob(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SelectDictionaryMobOut, any>>;
}
