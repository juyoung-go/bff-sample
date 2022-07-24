import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetTransactionOut } from '../model';
import { PagingGetTransactionOut } from '../model';
export declare const TransactionsControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getTransactionOne: (authorization: string, gid: string, trDate?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getTransactions: (authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const TransactionsControllerApiFp: (configuration?: Configuration) => {
    getTransactionOne(authorization: string, gid: string, trDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransactionOut>>;
    getTransactions(authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetTransactionOut>>;
};
export declare const TransactionsControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getTransactionOne(authorization: string, gid: string, trDate?: string, options?: any): AxiosPromise<GetTransactionOut>;
    getTransactions(authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options?: any): AxiosPromise<PagingGetTransactionOut>;
};
export declare class TransactionsControllerApi extends BaseAPI {
    getTransactionOne(authorization: string, gid: string, trDate?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetTransactionOut, any>>;
    getTransactions(authorization: string, apiId?: string, createDt?: string, createUserId?: string, elapsed?: string, errorMessage?: string, errorYn?: string, gid?: string, hostName?: string, maxTransactionDate?: string, method?: string, minTransactionDate?: string, mobYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, path?: string, referrer?: string, regUser?: string, remoteIp?: string, statusCode?: string, value?: string, varName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetTransactionOut, any>>;
}
