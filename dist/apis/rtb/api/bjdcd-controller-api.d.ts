import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetBjdcdForModalOut } from '../model';
import { SelectBjdOut } from '../model';
export declare const BjdcdControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getBjdcdListByParBjdCdId: (authorization: string, parBjdCdId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBjdcdListForModal: (authorization: string, addr?: string, bjdCd?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBjdcdListMapByBjdCdId: (authorization: string, bjdCdId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getRootBjdcdList: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BjdcdControllerApiFp: (configuration?: Configuration) => {
    getBjdcdListByParBjdCdId(authorization: string, parBjdCdId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SelectBjdOut>>>;
    getBjdcdListForModal(authorization: string, addr?: string, bjdCd?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBjdcdForModalOut>>;
    getBjdcdListMapByBjdCdId(authorization: string, bjdCdId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{
        [key: string]: SelectBjdOut[];
    }>>;
    getRootBjdcdList(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SelectBjdOut>>>;
};
export declare const BjdcdControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getBjdcdListByParBjdCdId(authorization: string, parBjdCdId: string, options?: any): AxiosPromise<Array<SelectBjdOut>>;
    getBjdcdListForModal(authorization: string, addr?: string, bjdCd?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetBjdcdForModalOut>;
    getBjdcdListMapByBjdCdId(authorization: string, bjdCdId: string, options?: any): AxiosPromise<{
        [key: string]: SelectBjdOut[];
    }>;
    getRootBjdcdList(authorization: string, options?: any): AxiosPromise<Array<SelectBjdOut>>;
};
export declare class BjdcdControllerApi extends BaseAPI {
    getBjdcdListByParBjdCdId(authorization: string, parBjdCdId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SelectBjdOut[], any>>;
    getBjdcdListForModal(authorization: string, addr?: string, bjdCd?: Array<string>, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBjdcdForModalOut, any>>;
    getBjdcdListMapByBjdCdId(authorization: string, bjdCdId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<{
        [key: string]: SelectBjdOut[];
    }, any>>;
    getRootBjdcdList(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SelectBjdOut[], any>>;
}
