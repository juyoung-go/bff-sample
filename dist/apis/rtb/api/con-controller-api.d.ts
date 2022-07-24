import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { MbrConLogHst } from '../model';
import { PagingGetConRecOut } from '../model';
import { PagingGetSchConOut } from '../model';
import { SaveConLogHstIn } from '../model';
export declare const ConControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getConRecListPaging: (authorization: string, conId: string, conId2?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSchConPaging: (authorization: string, con?: string, conTgtRel?: string, conTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postConLogHst: (authorization: string, conId: string, input: SaveConLogHstIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ConControllerApiFp: (configuration?: Configuration) => {
    getConRecListPaging(authorization: string, conId: string, conId2?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetConRecOut>>;
    getSchConPaging(authorization: string, con?: string, conTgtRel?: string, conTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSchConOut>>;
    postConLogHst(authorization: string, conId: string, input: SaveConLogHstIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MbrConLogHst>>;
};
export declare const ConControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getConRecListPaging(authorization: string, conId: string, conId2?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetConRecOut>;
    getSchConPaging(authorization: string, con?: string, conTgtRel?: string, conTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetSchConOut>;
    postConLogHst(authorization: string, conId: string, input: SaveConLogHstIn, options?: any): AxiosPromise<MbrConLogHst>;
};
export declare class ConControllerApi extends BaseAPI {
    getConRecListPaging(authorization: string, conId: string, conId2?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetConRecOut, any>>;
    getSchConPaging(authorization: string, con?: string, conTgtRel?: string, conTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSchConOut, any>>;
    postConLogHst(authorization: string, conId: string, input: SaveConLogHstIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MbrConLogHst, any>>;
}
