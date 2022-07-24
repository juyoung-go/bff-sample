import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Coords } from '../model';
import { GetAddrKkoOut } from '../model';
import { GetKeywordKkoOut } from '../model';
export declare const AddrKkoControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getCoord: (authorization: string, query: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getKKoKeywordAddr: (authorization: string, page: number, query: string, size: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getKkoAddr: (authorization: string, page: number, query: string, size: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AddrKkoControllerApiFp: (configuration?: Configuration) => {
    getCoord(authorization: string, query: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Coords>>;
    getKKoKeywordAddr(authorization: string, page: number, query: string, size: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetKeywordKkoOut>>;
    getKkoAddr(authorization: string, page: number, query: string, size: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAddrKkoOut>>;
};
export declare const AddrKkoControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getCoord(authorization: string, query: string, options?: any): AxiosPromise<Coords>;
    getKKoKeywordAddr(authorization: string, page: number, query: string, size: number, options?: any): AxiosPromise<GetKeywordKkoOut>;
    getKkoAddr(authorization: string, page: number, query: string, size: number, options?: any): AxiosPromise<GetAddrKkoOut>;
};
export declare class AddrKkoControllerApi extends BaseAPI {
    getCoord(authorization: string, query: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Coords, any>>;
    getKKoKeywordAddr(authorization: string, page: number, query: string, size: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetKeywordKkoOut, any>>;
    getKkoAddr(authorization: string, page: number, query: string, size: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetAddrKkoOut, any>>;
}
