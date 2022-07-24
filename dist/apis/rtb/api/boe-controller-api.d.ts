import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBoeFrontOut } from '../model';
import { PagingGetBoeFrontOut } from '../model';
import { PostBoeIn } from '../model';
export declare const BoeControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteBoeOneByBoeId: (authorization: string, boeId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBoeListPaging: (authorization: string, bldBoeTypeCds?: Array<string>, createUserId?: string, orderBy?: string, pageNum?: number, pageSize?: number, seq?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBoeOneByCd: (authorization: string, bldBoeTypeCd: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postBoe: (authorization: string, input: PostBoeIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BoeControllerApiFp: (configuration?: Configuration) => {
    deleteBoeOneByBoeId(authorization: string, boeId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getBoeListPaging(authorization: string, bldBoeTypeCds?: Array<string>, createUserId?: string, orderBy?: string, pageNum?: number, pageSize?: number, seq?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBoeFrontOut>>;
    getBoeOneByCd(authorization: string, bldBoeTypeCd: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBoeFrontOut>>>;
    postBoe(authorization: string, input: PostBoeIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const BoeControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteBoeOneByBoeId(authorization: string, boeId: string, options?: any): AxiosPromise<void>;
    getBoeListPaging(authorization: string, bldBoeTypeCds?: Array<string>, createUserId?: string, orderBy?: string, pageNum?: number, pageSize?: number, seq?: number, options?: any): AxiosPromise<PagingGetBoeFrontOut>;
    getBoeOneByCd(authorization: string, bldBoeTypeCd: string, options?: any): AxiosPromise<Array<GetBoeFrontOut>>;
    postBoe(authorization: string, input: PostBoeIn, options?: any): AxiosPromise<string>;
};
export declare class BoeControllerApi extends BaseAPI {
    deleteBoeOneByBoeId(authorization: string, boeId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getBoeListPaging(authorization: string, bldBoeTypeCds?: Array<string>, createUserId?: string, orderBy?: string, pageNum?: number, pageSize?: number, seq?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBoeFrontOut, any>>;
    getBoeOneByCd(authorization: string, bldBoeTypeCd: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBoeFrontOut[], any>>;
    postBoe(authorization: string, input: PostBoeIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
