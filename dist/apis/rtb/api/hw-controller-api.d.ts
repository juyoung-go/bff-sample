import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetHwOut } from '../model';
import { GetIcOut } from '../model';
import { PagingGetHwOut } from '../model';
import { PostHwIn } from '../model';
import { PostIcIn } from '../model';
export declare const HwControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteHw: (authorization: string, hwId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteIc: (authorization: string, icId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getHw: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getHwPaging: (authorization: string, hwId?: string, hwName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getIcPaging: (authorization: string, hwId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchHw: (authorization: string, hwId: string, input: PostHwIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchIc: (authorization: string, icId: string, input: PostIcIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postHw: (authorization: string, input: PostHwIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postIc: (authorization: string, input: PostIcIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const HwControllerApiFp: (configuration?: Configuration) => {
    deleteHw(authorization: string, hwId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteIc(authorization: string, icId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getHw(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetHwOut>>>;
    getHwPaging(authorization: string, hwId?: string, hwName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetHwOut>>;
    getIcPaging(authorization: string, hwId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetIcOut>>>;
    patchHw(authorization: string, hwId: string, input: PostHwIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetHwOut>>;
    patchIc(authorization: string, icId: string, input: PostIcIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIcOut>>;
    postHw(authorization: string, input: PostHwIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetHwOut>>;
    postIc(authorization: string, input: PostIcIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIcOut>>;
};
export declare const HwControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteHw(authorization: string, hwId: string, options?: any): AxiosPromise<void>;
    deleteIc(authorization: string, icId: string, options?: any): AxiosPromise<void>;
    getHw(authorization: string, options?: any): AxiosPromise<Array<GetHwOut>>;
    getHwPaging(authorization: string, hwId?: string, hwName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetHwOut>;
    getIcPaging(authorization: string, hwId?: string, options?: any): AxiosPromise<Array<GetIcOut>>;
    patchHw(authorization: string, hwId: string, input: PostHwIn, options?: any): AxiosPromise<GetHwOut>;
    patchIc(authorization: string, icId: string, input: PostIcIn, options?: any): AxiosPromise<GetIcOut>;
    postHw(authorization: string, input: PostHwIn, options?: any): AxiosPromise<GetHwOut>;
    postIc(authorization: string, input: PostIcIn, options?: any): AxiosPromise<GetIcOut>;
};
export declare class HwControllerApi extends BaseAPI {
    deleteHw(authorization: string, hwId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteIc(authorization: string, icId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getHw(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetHwOut[], any>>;
    getHwPaging(authorization: string, hwId?: string, hwName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetHwOut, any>>;
    getIcPaging(authorization: string, hwId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetIcOut[], any>>;
    patchHw(authorization: string, hwId: string, input: PostHwIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetHwOut, any>>;
    patchIc(authorization: string, icId: string, input: PostIcIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetIcOut, any>>;
    postHw(authorization: string, input: PostHwIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetHwOut, any>>;
    postIc(authorization: string, input: PostIcIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetIcOut, any>>;
}
