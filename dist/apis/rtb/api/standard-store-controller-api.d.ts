import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { StandardStoreOut } from '../model';
export declare const StandardStoreControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getRecentDate: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getStandardStoreListInMap: (authorization: string, brandName?: Array<string>, neLat?: number, neLng?: number, swLat?: number, swLng?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const StandardStoreControllerApiFp: (configuration?: Configuration) => {
    getRecentDate(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getStandardStoreListInMap(authorization: string, brandName?: Array<string>, neLat?: number, neLng?: number, swLat?: number, swLng?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StandardStoreOut>>>;
};
export declare const StandardStoreControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getRecentDate(authorization: string, options?: any): AxiosPromise<string>;
    getStandardStoreListInMap(authorization: string, brandName?: Array<string>, neLat?: number, neLng?: number, swLat?: number, swLng?: number, options?: any): AxiosPromise<Array<StandardStoreOut>>;
};
export declare class StandardStoreControllerApi extends BaseAPI {
    getRecentDate(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getStandardStoreListInMap(authorization: string, brandName?: Array<string>, neLat?: number, neLng?: number, swLat?: number, swLng?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<StandardStoreOut[], any>>;
}
