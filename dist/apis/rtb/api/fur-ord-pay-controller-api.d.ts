import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { DeleteOrdPaySts } from '../model';
import { GetOrdPayDetailOut } from '../model';
import { GetOrdPayDtlByListOut } from '../model';
import { PagingGetOrdPayOut } from '../model';
import { PatchOrdPayInfo } from '../model';
import { PatchOrdPaySts } from '../model';
import { PostOrdPaySts } from '../model';
export declare const FurOrdPayControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteAllOfOrd: (authorization: string, ordId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteOrdPaySts: (authorization: string, ordId: string, input: DeleteOrdPaySts, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getOrdPayOne: (authorization: string, ordId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getOrdPayPaging: (authorization: string, clnId?: string, clnName?: string, maxDlvrDy?: string, maxRegDy?: string, minDlvrDy?: string, minRegDy?: string, ordId?: string, ordName?: string, ordRoutCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, payMethodCd?: string, savingFeeStatCd?: string, savingFeeYn?: string, seq?: string, taxinvIssYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPaysByOrdId: (authorization: string, ordId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchOrdPayInfo: (authorization: string, ordId: string, input: PatchOrdPayInfo, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchOrdPaySts: (authorization: string, ordId: string, seq: number, input: PatchOrdPaySts, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postOrdPaySts: (authorization: string, input: PostOrdPaySts, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const FurOrdPayControllerApiFp: (configuration?: Configuration) => {
    deleteAllOfOrd(authorization: string, ordId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    deleteOrdPaySts(authorization: string, ordId: string, input: DeleteOrdPaySts, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getOrdPayOne(authorization: string, ordId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOrdPayDetailOut>>;
    getOrdPayPaging(authorization: string, clnId?: string, clnName?: string, maxDlvrDy?: string, maxRegDy?: string, minDlvrDy?: string, minRegDy?: string, ordId?: string, ordName?: string, ordRoutCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, payMethodCd?: string, savingFeeStatCd?: string, savingFeeYn?: string, seq?: string, taxinvIssYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetOrdPayOut>>;
    getPaysByOrdId(authorization: string, ordId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetOrdPayDtlByListOut>>>;
    patchOrdPayInfo(authorization: string, ordId: string, input: PatchOrdPayInfo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    patchOrdPaySts(authorization: string, ordId: string, seq: number, input: PatchOrdPaySts, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    postOrdPaySts(authorization: string, input: PostOrdPaySts, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const FurOrdPayControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteAllOfOrd(authorization: string, ordId: string, options?: any): AxiosPromise<number>;
    deleteOrdPaySts(authorization: string, ordId: string, input: DeleteOrdPaySts, options?: any): AxiosPromise<number>;
    getOrdPayOne(authorization: string, ordId: string, options?: any): AxiosPromise<GetOrdPayDetailOut>;
    getOrdPayPaging(authorization: string, clnId?: string, clnName?: string, maxDlvrDy?: string, maxRegDy?: string, minDlvrDy?: string, minRegDy?: string, ordId?: string, ordName?: string, ordRoutCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, payMethodCd?: string, savingFeeStatCd?: string, savingFeeYn?: string, seq?: string, taxinvIssYn?: string, options?: any): AxiosPromise<PagingGetOrdPayOut>;
    getPaysByOrdId(authorization: string, ordId?: string, options?: any): AxiosPromise<Array<GetOrdPayDtlByListOut>>;
    patchOrdPayInfo(authorization: string, ordId: string, input: PatchOrdPayInfo, options?: any): AxiosPromise<number>;
    patchOrdPaySts(authorization: string, ordId: string, seq: number, input: PatchOrdPaySts, options?: any): AxiosPromise<number>;
    postOrdPaySts(authorization: string, input: PostOrdPaySts, options?: any): AxiosPromise<number>;
};
export declare class FurOrdPayControllerApi extends BaseAPI {
    deleteAllOfOrd(authorization: string, ordId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    deleteOrdPaySts(authorization: string, ordId: string, input: DeleteOrdPaySts, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getOrdPayOne(authorization: string, ordId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetOrdPayDetailOut, any>>;
    getOrdPayPaging(authorization: string, clnId?: string, clnName?: string, maxDlvrDy?: string, maxRegDy?: string, minDlvrDy?: string, minRegDy?: string, ordId?: string, ordName?: string, ordRoutCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, payMethodCd?: string, savingFeeStatCd?: string, savingFeeYn?: string, seq?: string, taxinvIssYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetOrdPayOut, any>>;
    getPaysByOrdId(authorization: string, ordId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetOrdPayDtlByListOut[], any>>;
    patchOrdPayInfo(authorization: string, ordId: string, input: PatchOrdPayInfo, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    patchOrdPaySts(authorization: string, ordId: string, seq: number, input: PatchOrdPaySts, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    postOrdPaySts(authorization: string, input: PostOrdPaySts, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
