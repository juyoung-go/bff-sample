import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PatchLwhUnitIn } from '../model';
import { PostLwhUnitIn } from '../model';
import { SelectLwhUnitListForScreenOut } from '../model';
export declare const LwhUnitDtlControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteLwhUnit: (authorization: string, unitLwhId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchLwhUnit: (authorization: string, input: PatchLwhUnitIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLwhUnit: (authorization: string, input: PostLwhUnitIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectLwhUnitListForScreen: (authorization: string, lwhId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const LwhUnitDtlControllerApiFp: (configuration?: Configuration) => {
    deleteLwhUnit(authorization: string, unitLwhId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    patchLwhUnit(authorization: string, input: PatchLwhUnitIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postLwhUnit(authorization: string, input: PostLwhUnitIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    selectLwhUnitListForScreen(authorization: string, lwhId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SelectLwhUnitListForScreenOut>>>;
};
export declare const LwhUnitDtlControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteLwhUnit(authorization: string, unitLwhId?: string, options?: any): AxiosPromise<void>;
    patchLwhUnit(authorization: string, input: PatchLwhUnitIn, options?: any): AxiosPromise<void>;
    postLwhUnit(authorization: string, input: PostLwhUnitIn, options?: any): AxiosPromise<void>;
    selectLwhUnitListForScreen(authorization: string, lwhId?: string, options?: any): AxiosPromise<Array<SelectLwhUnitListForScreenOut>>;
};
export declare class LwhUnitDtlControllerApi extends BaseAPI {
    deleteLwhUnit(authorization: string, unitLwhId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    patchLwhUnit(authorization: string, input: PatchLwhUnitIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postLwhUnit(authorization: string, input: PostLwhUnitIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    selectLwhUnitListForScreen(authorization: string, lwhId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SelectLwhUnitListForScreenOut[], any>>;
}
