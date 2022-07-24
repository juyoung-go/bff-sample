import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetAddrNaverOut } from '../model';
export declare const AddrNaverControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getNaverAddr: (authorization: string, bjdcdId: string, count: number, page: number, query: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getRoadAddr: (authorization: string, count: number, page: number, query: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AddrNaverControllerApiFp: (configuration?: Configuration) => {
    getNaverAddr(authorization: string, bjdcdId: string, count: number, page: number, query: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAddrNaverOut>>;
    getRoadAddr(authorization: string, count: number, page: number, query: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const AddrNaverControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getNaverAddr(authorization: string, bjdcdId: string, count: number, page: number, query: string, options?: any): AxiosPromise<GetAddrNaverOut>;
    getRoadAddr(authorization: string, count: number, page: number, query: string, options?: any): AxiosPromise<string>;
};
export declare class AddrNaverControllerApi extends BaseAPI {
    getNaverAddr(authorization: string, bjdcdId: string, count: number, page: number, query: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetAddrNaverOut, any>>;
    getRoadAddr(authorization: string, count: number, page: number, query: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
