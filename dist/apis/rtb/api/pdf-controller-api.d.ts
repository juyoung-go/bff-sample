import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetPdfOut } from '../model';
export declare const PdfControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getPdfs: (authorization: string, createUserId?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, pdfTypeCd?: string, serviceCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const PdfControllerApiFp: (configuration?: Configuration) => {
    getPdfs(authorization: string, createUserId?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, pdfTypeCd?: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetPdfOut>>;
};
export declare const PdfControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getPdfs(authorization: string, createUserId?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, pdfTypeCd?: string, serviceCd?: string, options?: any): AxiosPromise<PagingGetPdfOut>;
};
export declare class PdfControllerApi extends BaseAPI {
    getPdfs(authorization: string, createUserId?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, pdfTypeCd?: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetPdfOut, any>>;
}
