import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { FurFurMst } from '../model';
import { GetBrdOut } from '../model';
import { GetCatgOut } from '../model';
import { GetFindFurOut } from '../model';
import { GetFurOut } from '../model';
import { GetLineOut } from '../model';
import { PagingGetFurOut } from '../model';
import { PostFurIn } from '../model';
export declare const FurControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteFur: (authorization: string, furId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBrdFilter: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCatgFliter: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getFindFur: (authorization: string, furId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getFur: (authorization: string, furId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getFurPaging: (authorization: string, brdId?: string, brdLineId?: string, brdName?: string, catgId?: string, catgName?: string, furName?: string, lineName?: string, maxConsumerUnitPrc?: number, maxSupplyUnitPrc?: number, maxUpdateDt?: string, maxWthMm?: number, minConsumerUnitPrc?: number, minSupplyUnitPrc?: number, minUpdateDt?: string, minWthMm?: number, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLineFliter: (authorization: string, brdId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchFur: (authorization: string, furId: string, input: PostFurIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postFur: (authorization: string, input: PostFurIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const FurControllerApiFp: (configuration?: Configuration) => {
    deleteFur(authorization: string, furId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getBrdFilter(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBrdOut>>>;
    getCatgFliter(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCatgOut>>>;
    getFindFur(authorization: string, furId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFindFurOut>>;
    getFur(authorization: string, furId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFurOut>>;
    getFurPaging(authorization: string, brdId?: string, brdLineId?: string, brdName?: string, catgId?: string, catgName?: string, furName?: string, lineName?: string, maxConsumerUnitPrc?: number, maxSupplyUnitPrc?: number, maxUpdateDt?: string, maxWthMm?: number, minConsumerUnitPrc?: number, minSupplyUnitPrc?: number, minUpdateDt?: string, minWthMm?: number, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetFurOut>>;
    getLineFliter(authorization: string, brdId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetLineOut>>>;
    patchFur(authorization: string, furId: string, input: PostFurIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFurOut>>;
    postFur(authorization: string, input: PostFurIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FurFurMst>>;
};
export declare const FurControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteFur(authorization: string, furId: string, options?: any): AxiosPromise<void>;
    getBrdFilter(authorization: string, options?: any): AxiosPromise<Array<GetBrdOut>>;
    getCatgFliter(authorization: string, options?: any): AxiosPromise<Array<GetCatgOut>>;
    getFindFur(authorization: string, furId: string, options?: any): AxiosPromise<GetFindFurOut>;
    getFur(authorization: string, furId: string, options?: any): AxiosPromise<GetFurOut>;
    getFurPaging(authorization: string, brdId?: string, brdLineId?: string, brdName?: string, catgId?: string, catgName?: string, furName?: string, lineName?: string, maxConsumerUnitPrc?: number, maxSupplyUnitPrc?: number, maxUpdateDt?: string, maxWthMm?: number, minConsumerUnitPrc?: number, minSupplyUnitPrc?: number, minUpdateDt?: string, minWthMm?: number, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetFurOut>;
    getLineFliter(authorization: string, brdId: string, options?: any): AxiosPromise<Array<GetLineOut>>;
    patchFur(authorization: string, furId: string, input: PostFurIn, options?: any): AxiosPromise<GetFurOut>;
    postFur(authorization: string, input: PostFurIn, options?: any): AxiosPromise<FurFurMst>;
};
export declare class FurControllerApi extends BaseAPI {
    deleteFur(authorization: string, furId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getBrdFilter(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBrdOut[], any>>;
    getCatgFliter(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCatgOut[], any>>;
    getFindFur(authorization: string, furId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetFindFurOut, any>>;
    getFur(authorization: string, furId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetFurOut, any>>;
    getFurPaging(authorization: string, brdId?: string, brdLineId?: string, brdName?: string, catgId?: string, catgName?: string, furName?: string, lineName?: string, maxConsumerUnitPrc?: number, maxSupplyUnitPrc?: number, maxUpdateDt?: string, maxWthMm?: number, minConsumerUnitPrc?: number, minSupplyUnitPrc?: number, minUpdateDt?: string, minWthMm?: number, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetFurOut, any>>;
    getLineFliter(authorization: string, brdId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetLineOut[], any>>;
    patchFur(authorization: string, furId: string, input: PostFurIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetFurOut, any>>;
    postFur(authorization: string, input: PostFurIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<FurFurMst, any>>;
}
