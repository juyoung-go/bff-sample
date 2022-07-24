import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetContOut } from '../model';
import { PagingGetContOut } from '../model';
import { PagingGetFileOut } from '../model';
import { PatchContIn } from '../model';
import { PostContIn } from '../model';
export declare const ContControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteCont: (authorization: string, contId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getContByFile: (authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getContById: (authorization: string, contId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getContPaging: (authorization: string, apnflExistYn?: string, contCfCd?: Array<string>, createUserName?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchCont: (authorization: string, input: PatchContIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postCont: (authorization: string, input: PostContIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ContControllerApiFp: (configuration?: Configuration) => {
    deleteCont(authorization: string, contId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getContByFile(authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetFileOut>>;
    getContById(authorization: string, contId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetContOut>>;
    getContPaging(authorization: string, apnflExistYn?: string, contCfCd?: Array<string>, createUserName?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetContOut>>;
    patchCont(authorization: string, input: PatchContIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postCont(authorization: string, input: PostContIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const ContControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteCont(authorization: string, contId?: string, options?: any): AxiosPromise<void>;
    getContByFile(authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: any): AxiosPromise<PagingGetFileOut>;
    getContById(authorization: string, contId?: string, options?: any): AxiosPromise<GetContOut>;
    getContPaging(authorization: string, apnflExistYn?: string, contCfCd?: Array<string>, createUserName?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: any): AxiosPromise<PagingGetContOut>;
    patchCont(authorization: string, input: PatchContIn, options?: any): AxiosPromise<void>;
    postCont(authorization: string, input: PostContIn, options?: any): AxiosPromise<string>;
};
export declare class ContControllerApi extends BaseAPI {
    deleteCont(authorization: string, contId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getContByFile(authorization: string, clnId?: string, fileTgtRelCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetFileOut, any>>;
    getContById(authorization: string, contId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetContOut, any>>;
    getContPaging(authorization: string, apnflExistYn?: string, contCfCd?: Array<string>, createUserName?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, sbj?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetContOut, any>>;
    patchCont(authorization: string, input: PatchContIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postCont(authorization: string, input: PostContIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
