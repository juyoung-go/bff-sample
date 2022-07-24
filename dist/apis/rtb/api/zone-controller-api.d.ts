import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PageZoneOut } from '../model';
import { PatchZoneIn } from '../model';
import { ZoneFilterOut } from '../model';
import { ZoneOut } from '../model';
export declare const ZoneControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteZone: (authorization: string, zoneId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getZoneList: (authorization: string, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getZoneListForFilter: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getZoneListInMap: (authorization: string, maxCreateDt?: string, minCreateDt?: string, neLat?: number, neLng?: number, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, swLat?: number, swLng?: number, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getZoneOne: (authorization: string, zoneId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchZone: (authorization: string, zoneId: string, input: PatchZoneIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postZone: (authorization: string, privateYn?: string, zoneGeom?: string, zoneName?: string, zoneRankCd?: string, zoneTypeCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ZoneControllerApiFp: (configuration?: Configuration) => {
    deleteZone(authorization: string, zoneId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
    getZoneList(authorization: string, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageZoneOut>>;
    getZoneListForFilter(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ZoneFilterOut>>>;
    getZoneListInMap(authorization: string, maxCreateDt?: string, minCreateDt?: string, neLat?: number, neLng?: number, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, swLat?: number, swLng?: number, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageZoneOut>>;
    getZoneOne(authorization: string, zoneId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ZoneOut>>;
    patchZone(authorization: string, zoneId: string, input: PatchZoneIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
    postZone(authorization: string, privateYn?: string, zoneGeom?: string, zoneName?: string, zoneRankCd?: string, zoneTypeCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>>;
};
export declare const ZoneControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteZone(authorization: string, zoneId: string, options?: any): AxiosPromise<boolean>;
    getZoneList(authorization: string, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: any): AxiosPromise<PageZoneOut>;
    getZoneListForFilter(authorization: string, options?: any): AxiosPromise<Array<ZoneFilterOut>>;
    getZoneListInMap(authorization: string, maxCreateDt?: string, minCreateDt?: string, neLat?: number, neLng?: number, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, swLat?: number, swLng?: number, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: any): AxiosPromise<PageZoneOut>;
    getZoneOne(authorization: string, zoneId: string, options?: any): AxiosPromise<ZoneOut>;
    patchZone(authorization: string, zoneId: string, input: PatchZoneIn, options?: any): AxiosPromise<boolean>;
    postZone(authorization: string, privateYn?: string, zoneGeom?: string, zoneName?: string, zoneRankCd?: string, zoneTypeCd?: string, options?: any): AxiosPromise<boolean>;
};
export declare class ZoneControllerApi extends BaseAPI {
    deleteZone(authorization: string, zoneId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
    getZoneList(authorization: string, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PageZoneOut, any>>;
    getZoneListForFilter(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ZoneFilterOut[], any>>;
    getZoneListInMap(authorization: string, maxCreateDt?: string, minCreateDt?: string, neLat?: number, neLng?: number, page?: number, privateYn?: string, size?: number, sortInfoList?: Array<string>, swLat?: number, swLng?: number, zoneId?: string, zoneName?: string, zoneRankCd?: Array<string>, zoneTypeCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PageZoneOut, any>>;
    getZoneOne(authorization: string, zoneId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ZoneOut, any>>;
    patchZone(authorization: string, zoneId: string, input: PatchZoneIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
    postZone(authorization: string, privateYn?: string, zoneGeom?: string, zoneName?: string, zoneRankCd?: string, zoneTypeCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<boolean, any>>;
}
