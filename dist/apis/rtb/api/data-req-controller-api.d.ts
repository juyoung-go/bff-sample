import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Resource } from '../model';
export declare const DataReqControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    dataRequest: (authorization: string, cf: string, baseDy?: string, brdName?: string, cf2?: string, lmBjdCd?: Array<string>, lmBoeTypeCds?: Array<string>, maxDlvrDy?: string, maxLmDy?: string, maxRentCmplDy?: string, maxTaxinvIssDy?: string, minDlvrDy?: string, minLmDy?: string, minRentCmplDy?: string, minTaxinvIssDy?: string, objTypeCd?: Array<string>, ordRoutCd?: Array<string>, taskCfCd?: string, tipGbCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DataReqControllerApiFp: (configuration?: Configuration) => {
    dataRequest(authorization: string, cf: string, baseDy?: string, brdName?: string, cf2?: string, lmBjdCd?: Array<string>, lmBoeTypeCds?: Array<string>, maxDlvrDy?: string, maxLmDy?: string, maxRentCmplDy?: string, maxTaxinvIssDy?: string, minDlvrDy?: string, minLmDy?: string, minRentCmplDy?: string, minTaxinvIssDy?: string, objTypeCd?: Array<string>, ordRoutCd?: Array<string>, taskCfCd?: string, tipGbCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
};
export declare const DataReqControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    dataRequest(authorization: string, cf: string, baseDy?: string, brdName?: string, cf2?: string, lmBjdCd?: Array<string>, lmBoeTypeCds?: Array<string>, maxDlvrDy?: string, maxLmDy?: string, maxRentCmplDy?: string, maxTaxinvIssDy?: string, minDlvrDy?: string, minLmDy?: string, minRentCmplDy?: string, minTaxinvIssDy?: string, objTypeCd?: Array<string>, ordRoutCd?: Array<string>, taskCfCd?: string, tipGbCd?: string, options?: any): AxiosPromise<Resource>;
};
export declare class DataReqControllerApi extends BaseAPI {
    dataRequest(authorization: string, cf: string, baseDy?: string, brdName?: string, cf2?: string, lmBjdCd?: Array<string>, lmBoeTypeCds?: Array<string>, maxDlvrDy?: string, maxLmDy?: string, maxRentCmplDy?: string, maxTaxinvIssDy?: string, minDlvrDy?: string, minLmDy?: string, minRentCmplDy?: string, minTaxinvIssDy?: string, objTypeCd?: Array<string>, ordRoutCd?: Array<string>, taskCfCd?: string, tipGbCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
}
