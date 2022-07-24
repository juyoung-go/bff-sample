import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBrdLineOut } from '../model';
import { GetBrdOut } from '../model';
import { GetLineOut } from '../model';
import { PagingGetBrdOut } from '../model';
import { PatchLineIn } from '../model';
import { PostBrdIn } from '../model';
import { PostLineIn } from '../model';
export declare const FurBrdControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteBrand: (authorization: string, brdId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteLine: (authorization: string, brdLineId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBrand: (authorization: string, brdId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBrdPaging: (authorization: string, brdId?: string, brdName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLine: (authorization: string, brdId: string, brdLineId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLineList: (authorization: string, brdId?: string, brdLineId?: string, brdName?: string, lineName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchBrand: (authorization: string, brdId: string, input: PostBrdIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchLine: (authorization: string, brdId: string, brdLineId: string, input: PatchLineIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postBrand: (authorization: string, input: PostBrdIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postLine: (authorization: string, input: PostLineIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const FurBrdControllerApiFp: (configuration?: Configuration) => {
    deleteBrand(authorization: string, brdId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    deleteLine(authorization: string, brdLineId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getBrand(authorization: string, brdId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBrdOut>>;
    getBrdPaging(authorization: string, brdId?: string, brdName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBrdOut>>;
    getLine(authorization: string, brdId: string, brdLineId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBrdLineOut>>;
    getLineList(authorization: string, brdId?: string, brdLineId?: string, brdName?: string, lineName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetLineOut>>>;
    patchBrand(authorization: string, brdId: string, input: PostBrdIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBrdOut>>;
    patchLine(authorization: string, brdId: string, brdLineId: string, input: PatchLineIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBrdLineOut>>;
    postBrand(authorization: string, input: PostBrdIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    postLine(authorization: string, input: PostLineIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const FurBrdControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteBrand(authorization: string, brdId: string, options?: any): AxiosPromise<number>;
    deleteLine(authorization: string, brdLineId: string, options?: any): AxiosPromise<void>;
    getBrand(authorization: string, brdId: string, options?: any): AxiosPromise<GetBrdOut>;
    getBrdPaging(authorization: string, brdId?: string, brdName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetBrdOut>;
    getLine(authorization: string, brdId: string, brdLineId: string, options?: any): AxiosPromise<GetBrdLineOut>;
    getLineList(authorization: string, brdId?: string, brdLineId?: string, brdName?: string, lineName?: string, options?: any): AxiosPromise<Array<GetLineOut>>;
    patchBrand(authorization: string, brdId: string, input: PostBrdIn, options?: any): AxiosPromise<GetBrdOut>;
    patchLine(authorization: string, brdId: string, brdLineId: string, input: PatchLineIn, options?: any): AxiosPromise<GetBrdLineOut>;
    postBrand(authorization: string, input: PostBrdIn, options?: any): AxiosPromise<number>;
    postLine(authorization: string, input: PostLineIn, options?: any): AxiosPromise<number>;
};
export declare class FurBrdControllerApi extends BaseAPI {
    deleteBrand(authorization: string, brdId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    deleteLine(authorization: string, brdLineId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getBrand(authorization: string, brdId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBrdOut, any>>;
    getBrdPaging(authorization: string, brdId?: string, brdName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBrdOut, any>>;
    getLine(authorization: string, brdId: string, brdLineId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBrdLineOut, any>>;
    getLineList(authorization: string, brdId?: string, brdLineId?: string, brdName?: string, lineName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetLineOut[], any>>;
    patchBrand(authorization: string, brdId: string, input: PostBrdIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBrdOut, any>>;
    patchLine(authorization: string, brdId: string, brdLineId: string, input: PatchLineIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBrdLineOut, any>>;
    postBrand(authorization: string, input: PostBrdIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    postLine(authorization: string, input: PostLineIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
