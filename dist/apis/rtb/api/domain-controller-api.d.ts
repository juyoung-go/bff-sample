import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetDomainOut } from '../model';
import { PagingGetDomainOut } from '../model';
import { PatchDomainIn } from '../model';
import { PostDomainIn } from '../model';
export declare const DomainControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteDomain: (authorization: string, domainId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteDomainFromDb: (authorization: string, domainId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDomain: (authorization: string, domainId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDomainListPaging: (authorization: string, domainEngName?: string, domainHanName?: string, domainId?: string, domainValue?: string, exptYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchDomain: (authorization: string, domainId: string, input: PatchDomainIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postDomain: (authorization: string, input: PostDomainIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DomainControllerApiFp: (configuration?: Configuration) => {
    deleteDomain(authorization: string, domainId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteDomainFromDb(authorization: string, domainId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getDomain(authorization: string, domainId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDomainOut>>;
    getDomainListPaging(authorization: string, domainEngName?: string, domainHanName?: string, domainId?: string, domainValue?: string, exptYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetDomainOut>>;
    patchDomain(authorization: string, domainId: string, input: PatchDomainIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDomainOut>>;
    postDomain(authorization: string, input: PostDomainIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDomainOut>>;
};
export declare const DomainControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteDomain(authorization: string, domainId?: string, options?: any): AxiosPromise<void>;
    deleteDomainFromDb(authorization: string, domainId?: string, options?: any): AxiosPromise<void>;
    getDomain(authorization: string, domainId: string, options?: any): AxiosPromise<GetDomainOut>;
    getDomainListPaging(authorization: string, domainEngName?: string, domainHanName?: string, domainId?: string, domainValue?: string, exptYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: any): AxiosPromise<PagingGetDomainOut>;
    patchDomain(authorization: string, domainId: string, input: PatchDomainIn, options?: any): AxiosPromise<GetDomainOut>;
    postDomain(authorization: string, input: PostDomainIn, options?: any): AxiosPromise<GetDomainOut>;
};
export declare class DomainControllerApi extends BaseAPI {
    deleteDomain(authorization: string, domainId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteDomainFromDb(authorization: string, domainId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getDomain(authorization: string, domainId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDomainOut, any>>;
    getDomainListPaging(authorization: string, domainEngName?: string, domainHanName?: string, domainId?: string, domainValue?: string, exptYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, useYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetDomainOut, any>>;
    patchDomain(authorization: string, domainId: string, input: PatchDomainIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDomainOut, any>>;
    postDomain(authorization: string, input: PostDomainIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDomainOut, any>>;
}
