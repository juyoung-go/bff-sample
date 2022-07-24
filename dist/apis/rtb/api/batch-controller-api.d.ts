import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBatchOut } from '../model';
import { PagingGetBatchHstOut } from '../model';
import { PagingGetBatchOut } from '../model';
import { PatchBatchIn } from '../model';
import { SaveBatchIn } from '../model';
export declare const BatchControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteBatch: (authorization: string, batchId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLedgersBatch: (authorization: string, baseDate?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLedgersBatchAdd: (authorization: string, baseDate?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLedgersBatchCopy: (authorization: string, baseDate?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchBatch: (authorization: string, batchId: string, input: PatchBatchIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    saveBatch: (authorization: string, body: SaveBatchIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectAllBatch: (authorization: string, batchName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectBatch: (authorization: string, batchId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    selectBatchHst: (authorization: string, batchName?: string, batchTypeCd?: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BatchControllerApiFp: (configuration?: Configuration) => {
    deleteBatch(authorization: string, batchId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getLedgersBatch(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getLedgersBatchAdd(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getLedgersBatchCopy(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    patchBatch(authorization: string, batchId: string, input: PatchBatchIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    saveBatch(authorization: string, body: SaveBatchIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    selectAllBatch(authorization: string, batchName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBatchOut>>;
    selectBatch(authorization: string, batchId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBatchOut>>;
    selectBatchHst(authorization: string, batchName?: string, batchTypeCd?: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetBatchHstOut>>;
};
export declare const BatchControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteBatch(authorization: string, batchId: string, options?: any): AxiosPromise<void>;
    getLedgersBatch(authorization: string, baseDate?: string, options?: any): AxiosPromise<number>;
    getLedgersBatchAdd(authorization: string, baseDate?: string, options?: any): AxiosPromise<number>;
    getLedgersBatchCopy(authorization: string, baseDate?: string, options?: any): AxiosPromise<number>;
    patchBatch(authorization: string, batchId: string, input: PatchBatchIn, options?: any): AxiosPromise<void>;
    saveBatch(authorization: string, body: SaveBatchIn, options?: any): AxiosPromise<string>;
    selectAllBatch(authorization: string, batchName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetBatchOut>;
    selectBatch(authorization: string, batchId?: string, options?: any): AxiosPromise<GetBatchOut>;
    selectBatchHst(authorization: string, batchName?: string, batchTypeCd?: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetBatchHstOut>;
};
export declare class BatchControllerApi extends BaseAPI {
    deleteBatch(authorization: string, batchId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getLedgersBatch(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getLedgersBatchAdd(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getLedgersBatchCopy(authorization: string, baseDate?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    patchBatch(authorization: string, batchId: string, input: PatchBatchIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    saveBatch(authorization: string, body: SaveBatchIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    selectAllBatch(authorization: string, batchName?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBatchOut, any>>;
    selectBatch(authorization: string, batchId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBatchOut, any>>;
    selectBatchHst(authorization: string, batchName?: string, batchTypeCd?: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetBatchHstOut, any>>;
}
