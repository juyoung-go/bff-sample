import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetEdmClickDataOut } from '../model';
import { GetEdmMonthlyDataOut } from '../model';
import { PagingGetEdmDetailOut } from '../model';
export declare const EdmControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getEdmDetailList: (authorization: string, event?: string, orderBy?: string, pageNum?: number, pageSize?: number, yearMonth?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEdmMonthlyData: (authorization: string, year: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEdmUrlClickData: (authorization: string, yearMonth: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEdmYearList: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const EdmControllerApiFp: (configuration?: Configuration) => {
    getEdmDetailList(authorization: string, event?: string, orderBy?: string, pageNum?: number, pageSize?: number, yearMonth?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetEdmDetailOut>>;
    getEdmMonthlyData(authorization: string, year: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEdmMonthlyDataOut>>>;
    getEdmUrlClickData(authorization: string, yearMonth: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEdmClickDataOut>>;
    getEdmYearList(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>>;
};
export declare const EdmControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getEdmDetailList(authorization: string, event?: string, orderBy?: string, pageNum?: number, pageSize?: number, yearMonth?: string, options?: any): AxiosPromise<PagingGetEdmDetailOut>;
    getEdmMonthlyData(authorization: string, year: string, options?: any): AxiosPromise<Array<GetEdmMonthlyDataOut>>;
    getEdmUrlClickData(authorization: string, yearMonth: string, options?: any): AxiosPromise<GetEdmClickDataOut>;
    getEdmYearList(authorization: string, options?: any): AxiosPromise<Array<string>>;
};
export declare class EdmControllerApi extends BaseAPI {
    getEdmDetailList(authorization: string, event?: string, orderBy?: string, pageNum?: number, pageSize?: number, yearMonth?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetEdmDetailOut, any>>;
    getEdmMonthlyData(authorization: string, year: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEdmMonthlyDataOut[], any>>;
    getEdmUrlClickData(authorization: string, yearMonth: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEdmClickDataOut, any>>;
    getEdmYearList(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string[], any>>;
}
