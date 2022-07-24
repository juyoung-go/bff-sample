import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetGmlForModalOut } from '../model';
export declare const GmlControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getGmlListForModal: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const GmlControllerApiFp: (configuration?: Configuration) => {
    getGmlListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetGmlForModalOut>>;
};
export declare const GmlControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getGmlListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: any): AxiosPromise<PagingGetGmlForModalOut>;
};
export declare class GmlControllerApi extends BaseAPI {
    getGmlListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetGmlForModalOut, any>>;
}
