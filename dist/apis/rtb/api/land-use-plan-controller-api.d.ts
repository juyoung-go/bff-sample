import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetLandUsePlanIn } from '../model';
import { LandUsePlanOut } from '../model';
export declare const LandUsePlanControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    createLandUsePlan: (authorization: string, input: GetLandUsePlanIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLandUsePlan: (authorization: string, pnu?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const LandUsePlanControllerApiFp: (configuration?: Configuration) => {
    createLandUsePlan(authorization: string, input: GetLandUsePlanIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getLandUsePlan(authorization: string, pnu?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LandUsePlanOut>>;
};
export declare const LandUsePlanControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    createLandUsePlan(authorization: string, input: GetLandUsePlanIn, options?: any): AxiosPromise<void>;
    getLandUsePlan(authorization: string, pnu?: string, options?: any): AxiosPromise<LandUsePlanOut>;
};
export declare class LandUsePlanControllerApi extends BaseAPI {
    createLandUsePlan(authorization: string, input: GetLandUsePlanIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getLandUsePlan(authorization: string, pnu?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LandUsePlanOut, any>>;
}
