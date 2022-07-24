import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBldRptNocOut } from '../model';
import { GetBldRptVcOut } from '../model';
export declare const BldRptControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getBldNocRpt: (authorization: string, bldId?: string, cityId?: string, endYm?: string, pnuId?: string, rptSearchCfCd?: string, rptSearchUnitCd?: string, siRoadId?: string, startYm?: string, year?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBldRptYears: (authorization: string, bldId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBldVcRpt: (authorization: string, bldId?: string, endYm?: string, rptSearchUnitCd?: string, startYm?: string, year?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const BldRptControllerApiFp: (configuration?: Configuration) => {
    getBldNocRpt(authorization: string, bldId?: string, cityId?: string, endYm?: string, pnuId?: string, rptSearchCfCd?: string, rptSearchUnitCd?: string, siRoadId?: string, startYm?: string, year?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBldRptNocOut>>>;
    getBldRptYears(authorization: string, bldId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>>;
    getBldVcRpt(authorization: string, bldId?: string, endYm?: string, rptSearchUnitCd?: string, startYm?: string, year?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetBldRptVcOut>>>;
};
export declare const BldRptControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getBldNocRpt(authorization: string, bldId?: string, cityId?: string, endYm?: string, pnuId?: string, rptSearchCfCd?: string, rptSearchUnitCd?: string, siRoadId?: string, startYm?: string, year?: string, options?: any): AxiosPromise<Array<GetBldRptNocOut>>;
    getBldRptYears(authorization: string, bldId?: string, options?: any): AxiosPromise<Array<string>>;
    getBldVcRpt(authorization: string, bldId?: string, endYm?: string, rptSearchUnitCd?: string, startYm?: string, year?: string, options?: any): AxiosPromise<Array<GetBldRptVcOut>>;
};
export declare class BldRptControllerApi extends BaseAPI {
    getBldNocRpt(authorization: string, bldId?: string, cityId?: string, endYm?: string, pnuId?: string, rptSearchCfCd?: string, rptSearchUnitCd?: string, siRoadId?: string, startYm?: string, year?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBldRptNocOut[], any>>;
    getBldRptYears(authorization: string, bldId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string[], any>>;
    getBldVcRpt(authorization: string, bldId?: string, endYm?: string, rptSearchUnitCd?: string, startYm?: string, year?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetBldRptVcOut[], any>>;
}
