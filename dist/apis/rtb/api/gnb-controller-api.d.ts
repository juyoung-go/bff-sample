import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetGnbOut } from '../model';
import { GnbScreen } from '../model';
export declare const GnbControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getGnb: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getGnbByService: (authorization: string, serviceCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSiteMapScreen: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSiteMapScreenByService: (authorization: string, serviceCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const GnbControllerApiFp: (configuration?: Configuration) => {
    getGnb(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetGnbOut>>;
    getGnbByService(authorization: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetGnbOut>>;
    getSiteMapScreen(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GnbScreen>>>;
    getSiteMapScreenByService(authorization: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GnbScreen>>>;
};
export declare const GnbControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getGnb(authorization: string, options?: any): AxiosPromise<GetGnbOut>;
    getGnbByService(authorization: string, serviceCd?: string, options?: any): AxiosPromise<GetGnbOut>;
    getSiteMapScreen(authorization: string, options?: any): AxiosPromise<Array<GnbScreen>>;
    getSiteMapScreenByService(authorization: string, serviceCd?: string, options?: any): AxiosPromise<Array<GnbScreen>>;
};
export declare class GnbControllerApi extends BaseAPI {
    getGnb(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetGnbOut, any>>;
    getGnbByService(authorization: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetGnbOut, any>>;
    getSiteMapScreen(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GnbScreen[], any>>;
    getSiteMapScreenByService(authorization: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GnbScreen[], any>>;
}
