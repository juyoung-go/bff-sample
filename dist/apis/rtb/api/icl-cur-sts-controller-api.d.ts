import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBldPointOut } from '../model';
import { PagingGetAllCurStsConOut } from '../model';
import { PagingGetAllCurStsConTypeOut } from '../model';
import { PagingGetAllCurStsPhtOut } from '../model';
import { PagingGetAllCurStsWorkTypeOut } from '../model';
export declare const IclCurStsControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllCurStsConPaging: (authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAllCurStsConTypePaging: (authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAllCurStsPhtPaging: (authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAllCurStsWorkTypePaging: (authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBuildingsByIclWorkList: (authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const IclCurStsControllerApiFp: (configuration?: Configuration) => {
    getAllCurStsConPaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsConOut>>;
    getAllCurStsConTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsConTypeOut>>;
    getAllCurStsPhtPaging(authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsPhtOut>>;
    getAllCurStsWorkTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllCurStsWorkTypeOut>>;
    getBuildingsByIclWorkList(authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBldPointOut>>>;
};
export declare const IclCurStsControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllCurStsConPaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsConOut>;
    getAllCurStsConTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsConTypeOut>;
    getAllCurStsPhtPaging(authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsPhtOut>;
    getAllCurStsWorkTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: any): AxiosPromise<PagingGetAllCurStsWorkTypeOut>;
    getBuildingsByIclWorkList(authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options?: any): AxiosPromise<Array<GetBldPointOut>>;
};
export declare class IclCurStsControllerApi extends BaseAPI {
    getAllCurStsConPaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllCurStsConOut, any>>;
    getAllCurStsConTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllCurStsConTypeOut, any>>;
    getAllCurStsPhtPaging(authorization: string, maxAssignDy?: string, maxPhtCreateDt?: string, maxProcDy?: string, minAssignDy?: string, minPhtCreateDt?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllCurStsPhtOut, any>>;
    getAllCurStsWorkTypePaging(authorization: string, maxProcDy?: string, minProcDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, workType?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllCurStsWorkTypeOut, any>>;
    getBuildingsByIclWorkList(authorization: string, maxProcDy: string, minProcDy: string, ptbId: string, workCfCd: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBldPointOut[], any>>;
}
