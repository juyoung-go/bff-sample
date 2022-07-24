import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetCatgOut } from '../model';
import { PostCatgIn } from '../model';
export declare const FurCatgControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteCatg: (authorization: string, catgId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCatgList: (authorization: string, catgId?: string, catgName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCatgOne: (authorization: string, catgId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchCatg: (authorization: string, catgId: string, input: PostCatgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postCatg: (authorization: string, input: PostCatgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const FurCatgControllerApiFp: (configuration?: Configuration) => {
    deleteCatg(authorization: string, catgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getCatgList(authorization: string, catgId?: string, catgName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCatgOut>>>;
    getCatgOne(authorization: string, catgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCatgOut>>;
    patchCatg(authorization: string, catgId: string, input: PostCatgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCatgOut>>;
    postCatg(authorization: string, input: PostCatgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCatgOut>>;
};
export declare const FurCatgControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteCatg(authorization: string, catgId: string, options?: any): AxiosPromise<void>;
    getCatgList(authorization: string, catgId?: string, catgName?: string, options?: any): AxiosPromise<Array<GetCatgOut>>;
    getCatgOne(authorization: string, catgId: string, options?: any): AxiosPromise<GetCatgOut>;
    patchCatg(authorization: string, catgId: string, input: PostCatgIn, options?: any): AxiosPromise<GetCatgOut>;
    postCatg(authorization: string, input: PostCatgIn, options?: any): AxiosPromise<GetCatgOut>;
};
export declare class FurCatgControllerApi extends BaseAPI {
    deleteCatg(authorization: string, catgId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getCatgList(authorization: string, catgId?: string, catgName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCatgOut[], any>>;
    getCatgOne(authorization: string, catgId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCatgOut, any>>;
    patchCatg(authorization: string, catgId: string, input: PostCatgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCatgOut, any>>;
    postCatg(authorization: string, input: PostCatgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCatgOut, any>>;
}
