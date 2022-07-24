import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetAddrOut } from '../model';
export declare const AddrGovControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getAddr: (authorization: string, countPerPage: number, currentPage: number, keyword: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AddrGovControllerApiFp: (configuration?: Configuration) => {
    getAddr(authorization: string, countPerPage: number, currentPage: number, keyword: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAddrOut>>;
};
export declare const AddrGovControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAddr(authorization: string, countPerPage: number, currentPage: number, keyword: string, options?: any): AxiosPromise<GetAddrOut>;
};
export declare class AddrGovControllerApi extends BaseAPI {
    getAddr(authorization: string, countPerPage: number, currentPage: number, keyword: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetAddrOut, any>>;
}
