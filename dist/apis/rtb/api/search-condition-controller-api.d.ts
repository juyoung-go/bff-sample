import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PageSearchConditionOut } from '../model';
import { PatchSearchConditionIn } from '../model';
export declare const SearchConditionControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteSearchCondition: (authorization: string, conditionId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSearchConditionList: (authorization: string, conditionName?: string, page?: number, screenUrlPath?: string, size?: number, sortInfoList?: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchSearchCondition: (authorization: string, conditionId: string, input: PatchSearchConditionIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postSearchCondition: (authorization: string, conditionCtn?: string, conditionName?: string, privateYn?: string, screenUrlPath?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SearchConditionControllerApiFp: (configuration?: Configuration) => {
    deleteSearchCondition(authorization: string, conditionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
    getSearchConditionList(authorization: string, conditionName?: string, page?: number, screenUrlPath?: string, size?: number, sortInfoList?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageSearchConditionOut>>;
    patchSearchCondition(authorization: string, conditionId: string, input: PatchSearchConditionIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
    postSearchCondition(authorization: string, conditionCtn?: string, conditionName?: string, privateYn?: string, screenUrlPath?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
};
export declare const SearchConditionControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteSearchCondition(authorization: string, conditionId: string, options?: any): AxiosPromise<boolean>;
    getSearchConditionList(authorization: string, conditionName?: string, page?: number, screenUrlPath?: string, size?: number, sortInfoList?: Array<string>, options?: any): AxiosPromise<PageSearchConditionOut>;
    patchSearchCondition(authorization: string, conditionId: string, input: PatchSearchConditionIn, options?: any): AxiosPromise<boolean>;
    postSearchCondition(authorization: string, conditionCtn?: string, conditionName?: string, privateYn?: string, screenUrlPath?: string, options?: any): AxiosPromise<boolean>;
};
export declare class SearchConditionControllerApi extends BaseAPI {
    deleteSearchCondition(authorization: string, conditionId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
    getSearchConditionList(authorization: string, conditionName?: string, page?: number, screenUrlPath?: string, size?: number, sortInfoList?: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PageSearchConditionOut, any>>;
    patchSearchCondition(authorization: string, conditionId: string, input: PatchSearchConditionIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
    postSearchCondition(authorization: string, conditionCtn?: string, conditionName?: string, privateYn?: string, screenUrlPath?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
}
