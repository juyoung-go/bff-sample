import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetTermOut } from '../model';
import { PagingGetTermOut } from '../model';
import { PatchTermIn } from '../model';
import { PostTermIn } from '../model';
export declare const TermControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteTerm: (authorization: string, termId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getTerm: (authorization: string, termId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getTermListPaging: (authorization: string, meanEng?: string, meanHan?: string, orderBy?: string, pageNum?: number, pageSize?: number, termId?: string, useYn?: string, varName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchTerm: (authorization: string, termId: string, input: PatchTermIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postTerm: (authorization: string, input: PostTermIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const TermControllerApiFp: (configuration?: Configuration) => {
    deleteTerm(authorization: string, termId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getTerm(authorization: string, termId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTermOut>>;
    getTermListPaging(authorization: string, meanEng?: string, meanHan?: string, orderBy?: string, pageNum?: number, pageSize?: number, termId?: string, useYn?: string, varName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetTermOut>>;
    patchTerm(authorization: string, termId: string, input: PatchTermIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTermOut>>;
    postTerm(authorization: string, input: PostTermIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTermOut>>;
};
export declare const TermControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteTerm(authorization: string, termId: string, options?: any): AxiosPromise<void>;
    getTerm(authorization: string, termId: string, options?: any): AxiosPromise<GetTermOut>;
    getTermListPaging(authorization: string, meanEng?: string, meanHan?: string, orderBy?: string, pageNum?: number, pageSize?: number, termId?: string, useYn?: string, varName?: string, options?: any): AxiosPromise<PagingGetTermOut>;
    patchTerm(authorization: string, termId: string, input: PatchTermIn, options?: any): AxiosPromise<GetTermOut>;
    postTerm(authorization: string, input: PostTermIn, options?: any): AxiosPromise<GetTermOut>;
};
export declare class TermControllerApi extends BaseAPI {
    deleteTerm(authorization: string, termId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getTerm(authorization: string, termId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetTermOut, any>>;
    getTermListPaging(authorization: string, meanEng?: string, meanHan?: string, orderBy?: string, pageNum?: number, pageSize?: number, termId?: string, useYn?: string, varName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetTermOut, any>>;
    patchTerm(authorization: string, termId: string, input: PatchTermIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetTermOut, any>>;
    postTerm(authorization: string, input: PostTermIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetTermOut, any>>;
}
