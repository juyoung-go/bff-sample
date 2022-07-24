import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetPrmtOut } from '../model';
import { PagingGetPrmtOut } from '../model';
import { PatchPrmtIn } from '../model';
import { PostPrmtIn } from '../model';
export declare const PrmtControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deletePrmt: (authorization: string, prmtId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrmt: (authorization: string, prmtId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrmtByPrmtName: (authorization: string, prmtName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrmtListPaging: (authorization: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, prmtId?: string, prmtName?: string, prmtVal?: string, sevrSngYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchPrmt: (authorization: string, prmtId: string, input: PatchPrmtIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postPrmt: (authorization: string, input: PostPrmtIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const PrmtControllerApiFp: (configuration?: Configuration) => {
    deletePrmt(authorization: string, prmtId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getPrmt(authorization: string, prmtId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPrmtOut>>;
    getPrmtByPrmtName(authorization: string, prmtName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getPrmtListPaging(authorization: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, prmtId?: string, prmtName?: string, prmtVal?: string, sevrSngYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetPrmtOut>>;
    patchPrmt(authorization: string, prmtId: string, input: PatchPrmtIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPrmtOut>>;
    postPrmt(authorization: string, input: PostPrmtIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPrmtOut>>;
};
export declare const PrmtControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deletePrmt(authorization: string, prmtId: string, options?: any): AxiosPromise<void>;
    getPrmt(authorization: string, prmtId: string, options?: any): AxiosPromise<GetPrmtOut>;
    getPrmtByPrmtName(authorization: string, prmtName: string, options?: any): AxiosPromise<string>;
    getPrmtListPaging(authorization: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, prmtId?: string, prmtName?: string, prmtVal?: string, sevrSngYn?: string, options?: any): AxiosPromise<PagingGetPrmtOut>;
    patchPrmt(authorization: string, prmtId: string, input: PatchPrmtIn, options?: any): AxiosPromise<GetPrmtOut>;
    postPrmt(authorization: string, input: PostPrmtIn, options?: any): AxiosPromise<GetPrmtOut>;
};
export declare class PrmtControllerApi extends BaseAPI {
    deletePrmt(authorization: string, prmtId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getPrmt(authorization: string, prmtId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetPrmtOut, any>>;
    getPrmtByPrmtName(authorization: string, prmtName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getPrmtListPaging(authorization: string, expl?: string, orderBy?: string, pageNum?: number, pageSize?: number, prmtId?: string, prmtName?: string, prmtVal?: string, sevrSngYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetPrmtOut, any>>;
    patchPrmt(authorization: string, prmtId: string, input: PatchPrmtIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetPrmtOut, any>>;
    postPrmt(authorization: string, input: PostPrmtIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetPrmtOut, any>>;
}
