import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Resource } from '../model';
export declare const PdfOldControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getPdfNmapUsingGET: (authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdCompareProposalForWww: (authorization: string, prdId?: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdProposalForWww: (authorization: string, prdId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const PdfOldControllerApiFp: (configuration?: Configuration) => {
    getPdfNmapUsingGET(authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getPrdCompareProposalForWww(authorization: string, prdId?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
    getPrdProposalForWww(authorization: string, prdId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
};
export declare const PdfOldControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getPdfNmapUsingGET(authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: any): AxiosPromise<string>;
    getPrdCompareProposalForWww(authorization: string, prdId?: Array<string>, options?: any): AxiosPromise<Resource>;
    getPrdProposalForWww(authorization: string, prdId?: string, options?: any): AxiosPromise<Resource>;
};
export declare class PdfOldControllerApi extends BaseAPI {
    getPdfNmapUsingGET(authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getPrdCompareProposalForWww(authorization: string, prdId?: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
    getPrdProposalForWww(authorization: string, prdId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
}
