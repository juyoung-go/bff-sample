import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetBungListOut } from '../model';
import { PagingGetMyDealListOut } from '../model';
import { PagingGetSlgListOut } from '../model';
import { PagingGetTodoOut } from '../model';
export declare const MyPageControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getMyBungDeals: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMyDeals: (authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMyLwhDeals: (authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMyRetailDeals: (authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMySlgDeals: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMyTodos: (authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MyPageControllerApiFp: (configuration?: Configuration) => {
    getMyBungDeals(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBungListOut>>;
    getMyDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetMyDealListOut>>;
    getMyLwhDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetMyDealListOut>>;
    getMyRetailDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetMyDealListOut>>;
    getMySlgDeals(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSlgListOut>>;
    getMyTodos(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetTodoOut>>;
};
export declare const MyPageControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getMyBungDeals(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: any): AxiosPromise<PagingGetBungListOut>;
    getMyDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: any): AxiosPromise<PagingGetMyDealListOut>;
    getMyLwhDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: any): AxiosPromise<PagingGetMyDealListOut>;
    getMyRetailDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: any): AxiosPromise<PagingGetMyDealListOut>;
    getMySlgDeals(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: any): AxiosPromise<PagingGetSlgListOut>;
    getMyTodos(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: any): AxiosPromise<PagingGetTodoOut>;
};
export declare class MyPageControllerApi extends BaseAPI {
    getMyBungDeals(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBungListOut, any>>;
    getMyDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetMyDealListOut, any>>;
    getMyLwhDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetMyDealListOut, any>>;
    getMyRetailDeals(authorization: string, clnName?: string, maxTaskRegDy?: string, minTaskRegDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, statCd?: Array<string>, taskId?: string, taskName?: string, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetMyDealListOut, any>>;
    getMySlgDeals(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSlgListOut, any>>;
    getMyTodos(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetTodoOut, any>>;
}
