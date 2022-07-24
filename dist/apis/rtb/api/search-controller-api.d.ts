import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { SavePolygonIn } from '../model';
import { SelectBuildingsOut } from '../model';
export declare const SearchControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getBuildings: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    savePolygon: (authorization: string, body: SavePolygonIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SearchControllerApiFp: (configuration?: Configuration) => {
    getBuildings(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SelectBuildingsOut>>>;
    savePolygon(authorization: string, body: SavePolygonIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const SearchControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getBuildings(authorization: string, options?: any): AxiosPromise<Array<SelectBuildingsOut>>;
    savePolygon(authorization: string, body: SavePolygonIn, options?: any): AxiosPromise<void>;
};
export declare class SearchControllerApi extends BaseAPI {
    getBuildings(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SelectBuildingsOut[], any>>;
    savePolygon(authorization: string, body: SavePolygonIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
