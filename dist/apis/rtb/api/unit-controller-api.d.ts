import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PatchUnitIn } from '../model';
export declare const UnitControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    delUnit: (authorization: string, unitId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updateUnit: (authorization: string, unitId: string, input: PatchUnitIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const UnitControllerApiFp: (configuration?: Configuration) => {
    delUnit(authorization: string, unitId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    updateUnit(authorization: string, unitId: string, input: PatchUnitIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const UnitControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    delUnit(authorization: string, unitId: string, options?: any): AxiosPromise<void>;
    updateUnit(authorization: string, unitId: string, input: PatchUnitIn, options?: any): AxiosPromise<void>;
};
export declare class UnitControllerApi extends BaseAPI {
    delUnit(authorization: string, unitId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    updateUnit(authorization: string, unitId: string, input: PatchUnitIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
