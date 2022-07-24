import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetAllBkliListOut } from '../model';
import { PagingGetAllNewLwhChkOut } from '../model';
export declare const LwhMngControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllNewLwhChkPaging: (authorization: string, bjdCd?: Array<string>, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhBkliListPaging: (authorization: string, bkliResnCd?: string, bldId?: string, conNum?: string, mainConYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const LwhMngControllerApiFp: (configuration?: Configuration) => {
    getAllNewLwhChkPaging(authorization: string, bjdCd?: Array<string>, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllNewLwhChkOut>>;
    getLwhBkliListPaging(authorization: string, bkliResnCd?: string, bldId?: string, conNum?: string, mainConYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllBkliListOut>>;
};
export declare const LwhMngControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllNewLwhChkPaging(authorization: string, bjdCd?: Array<string>, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetAllNewLwhChkOut>;
    getLwhBkliListPaging(authorization: string, bkliResnCd?: string, bldId?: string, conNum?: string, mainConYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetAllBkliListOut>;
};
export declare class LwhMngControllerApi extends BaseAPI {
    getAllNewLwhChkPaging(authorization: string, bjdCd?: Array<string>, maxRegDy?: string, minRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllNewLwhChkOut, any>>;
    getLwhBkliListPaging(authorization: string, bkliResnCd?: string, bldId?: string, conNum?: string, mainConYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllBkliListOut, any>>;
}
