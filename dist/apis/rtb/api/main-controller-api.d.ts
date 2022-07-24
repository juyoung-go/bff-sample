import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetMainOut } from '../model';
export declare const MainControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getMainInfo: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MainControllerApiFp: (configuration?: Configuration) => {
    getMainInfo(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMainOut>>;
};
export declare const MainControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getMainInfo(authorization: string, options?: any): AxiosPromise<GetMainOut>;
};
export declare class MainControllerApi extends BaseAPI {
    getMainInfo(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetMainOut, any>>;
}
