import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetBldForModalOut } from '../model';
import { PagingGetBselPrdForModalOut } from '../model';
import { PagingGetClnForModalOut } from '../model';
import { PagingGetCusForModalOut } from '../model';
import { PagingGetLwhUnitForModalOut } from '../model';
import { PagingGetPrdForModalOut } from '../model';
import { PagingGetUnitForModalOut } from '../model';
export declare const ComModalControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getBldListForModal: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBselPrdListForModal: (authorization: string, bselPrdType?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getClnListForModal: (authorization: string, dtlInfo?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCusListForModal: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhListForModal: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhPrdListForModal: (authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhUnitListForModal: (authorization: string, lwhId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdListForModal: (authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getUnitListForModal: (authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ComModalControllerApiFp: (configuration?: Configuration) => {
    getBldListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBldForModalOut>>;
    getBselPrdListForModal(authorization: string, bselPrdType?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBselPrdForModalOut>>;
    getClnListForModal(authorization: string, dtlInfo?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetClnForModalOut>>;
    getCusListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetCusForModalOut>>;
    getLwhListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBldForModalOut>>;
    getLwhPrdListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetPrdForModalOut>>;
    getLwhUnitListForModal(authorization: string, lwhId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetLwhUnitForModalOut>>;
    getPrdListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetPrdForModalOut>>;
    getUnitListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetUnitForModalOut>>;
};
export declare const ComModalControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getBldListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: any): AxiosPromise<PagingGetBldForModalOut>;
    getBselPrdListForModal(authorization: string, bselPrdType?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: any): AxiosPromise<PagingGetBselPrdForModalOut>;
    getClnListForModal(authorization: string, dtlInfo?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: any): AxiosPromise<PagingGetClnForModalOut>;
    getCusListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: any): AxiosPromise<PagingGetCusForModalOut>;
    getLwhListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: any): AxiosPromise<PagingGetBldForModalOut>;
    getLwhPrdListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: any): AxiosPromise<PagingGetPrdForModalOut>;
    getLwhUnitListForModal(authorization: string, lwhId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: any): AxiosPromise<PagingGetLwhUnitForModalOut>;
    getPrdListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: any): AxiosPromise<PagingGetPrdForModalOut>;
    getUnitListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: any): AxiosPromise<PagingGetUnitForModalOut>;
};
export declare class ComModalControllerApi extends BaseAPI {
    getBldListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBldForModalOut, any>>;
    getBselPrdListForModal(authorization: string, bselPrdType?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBselPrdForModalOut, any>>;
    getClnListForModal(authorization: string, dtlInfo?: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetClnForModalOut, any>>;
    getCusListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetCusForModalOut, any>>;
    getLwhListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBldForModalOut, any>>;
    getLwhPrdListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetPrdForModalOut, any>>;
    getLwhUnitListForModal(authorization: string, lwhId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetLwhUnitForModalOut, any>>;
    getPrdListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, prdId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetPrdForModalOut, any>>;
    getUnitListForModal(authorization: string, bldId?: string, orderBy?: string, pageNum?: number, pageSize?: number, unitId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetUnitForModalOut, any>>;
}
