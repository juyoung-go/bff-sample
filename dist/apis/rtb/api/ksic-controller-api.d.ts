import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetKsicCdOut } from '../model';
export declare const KsicControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getLcls: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMcls: (authorization: string, lclsCd: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getScls: (authorization: string, lclsCd: string, mclsCd: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const KsicControllerApiFp: (configuration?: Configuration) => {
    getLcls(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetKsicCdOut>>>;
    getMcls(authorization: string, lclsCd: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetKsicCdOut>>>;
    getScls(authorization: string, lclsCd: string, mclsCd: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetKsicCdOut>>>;
};
export declare const KsicControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getLcls(authorization: string, options?: any): AxiosPromise<Array<GetKsicCdOut>>;
    getMcls(authorization: string, lclsCd: string, options?: any): AxiosPromise<Array<GetKsicCdOut>>;
    getScls(authorization: string, lclsCd: string, mclsCd: string, options?: any): AxiosPromise<Array<GetKsicCdOut>>;
};
export declare class KsicControllerApi extends BaseAPI {
    getLcls(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetKsicCdOut[], any>>;
    getMcls(authorization: string, lclsCd: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetKsicCdOut[], any>>;
    getScls(authorization: string, lclsCd: string, mclsCd: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetKsicCdOut[], any>>;
}
