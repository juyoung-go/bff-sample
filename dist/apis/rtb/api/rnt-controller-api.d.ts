import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetRntOut } from '../model';
import { PagingGetRntOut } from '../model';
import { PatchRntIn } from '../model';
import { PostRntIn } from '../model';
export declare const RntControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteRnt: (authorization: string, rntId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getRntById: (authorization: string, rntId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getRntPaging: (authorization: string, dispYn?: string, maxRrtDy?: string, minRrtDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntStatCd?: string, rrtJbgrpCd?: string, rrtPeriodCd?: string, rrtTypeCd?: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchRnt: (authorization: string, input: PatchRntIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postRnt: (authorization: string, input: PostRntIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const RntControllerApiFp: (configuration?: Configuration) => {
    deleteRnt(authorization: string, rntId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getRntById(authorization: string, rntId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetRntOut>>;
    getRntPaging(authorization: string, dispYn?: string, maxRrtDy?: string, minRrtDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntStatCd?: string, rrtJbgrpCd?: string, rrtPeriodCd?: string, rrtTypeCd?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetRntOut>>;
    patchRnt(authorization: string, input: PatchRntIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postRnt(authorization: string, input: PostRntIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const RntControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteRnt(authorization: string, rntId?: string, options?: any): AxiosPromise<void>;
    getRntById(authorization: string, rntId?: string, options?: any): AxiosPromise<GetRntOut>;
    getRntPaging(authorization: string, dispYn?: string, maxRrtDy?: string, minRrtDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntStatCd?: string, rrtJbgrpCd?: string, rrtPeriodCd?: string, rrtTypeCd?: Array<string>, options?: any): AxiosPromise<PagingGetRntOut>;
    patchRnt(authorization: string, input: PatchRntIn, options?: any): AxiosPromise<void>;
    postRnt(authorization: string, input: PostRntIn, options?: any): AxiosPromise<string>;
};
export declare class RntControllerApi extends BaseAPI {
    deleteRnt(authorization: string, rntId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getRntById(authorization: string, rntId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetRntOut, any>>;
    getRntPaging(authorization: string, dispYn?: string, maxRrtDy?: string, minRrtDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rntStatCd?: string, rrtJbgrpCd?: string, rrtPeriodCd?: string, rrtTypeCd?: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetRntOut, any>>;
    patchRnt(authorization: string, input: PatchRntIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postRnt(authorization: string, input: PostRntIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
