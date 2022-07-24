import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBuildingsOutlinesSummeries } from '../model';
export declare const BuildingsControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllBuidingsOutlinesSummaries: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBatchTest: (authorization: string, baseDate?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBosBatchTest: (authorization: string, baseDate?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBuidingsOutlinesSummeries: (authorization: string, objectId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDongBatchTest: (authorization: string, count?: number, excId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getTestLedgersUpdatse: (authorization: string, baseDate?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getTotalLandArea: (authorization: string, objId?: string, objType?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BuildingsControllerApiFp: (configuration?: Configuration) => {
    getAllBuidingsOutlinesSummaries(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getBatchTest(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getBosBatchTest(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getBuidingsOutlinesSummeries(authorization: string, objectId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBuildingsOutlinesSummeries>>;
    getDongBatchTest(authorization: string, count?: number, excId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getTestLedgersUpdatse(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getTotalLandArea(authorization: string, objId?: string, objType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const BuildingsControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllBuidingsOutlinesSummaries(authorization: string, options?: any): AxiosPromise<number>;
    getBatchTest(authorization: string, baseDate?: string, options?: any): AxiosPromise<number>;
    getBosBatchTest(authorization: string, baseDate?: string, options?: any): AxiosPromise<number>;
    getBuidingsOutlinesSummeries(authorization: string, objectId: string, options?: any): AxiosPromise<GetBuildingsOutlinesSummeries>;
    getDongBatchTest(authorization: string, count?: number, excId?: string, options?: any): AxiosPromise<number>;
    getTestLedgersUpdatse(authorization: string, baseDate?: string, options?: any): AxiosPromise<number>;
    getTotalLandArea(authorization: string, objId?: string, objType?: string, options?: any): AxiosPromise<number>;
};
export declare class BuildingsControllerApi extends BaseAPI {
    getAllBuidingsOutlinesSummaries(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getBatchTest(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getBosBatchTest(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getBuidingsOutlinesSummeries(authorization: string, objectId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBuildingsOutlinesSummeries, any>>;
    getDongBatchTest(authorization: string, count?: number, excId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getTestLedgersUpdatse(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getTotalLandArea(authorization: string, objId?: string, objType?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
