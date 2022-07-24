import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { PagingGetMenuScreenOut } from '../model';
import { PostMenuScreensIn } from '../model';
export declare const MenuScreenRelControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteMenuScreen: (authorization: string, menuId?: string, screenId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMenuScreens: (authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, seq?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postMenuScreen: (authorization: string, input: PostMenuScreensIn, menuId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MenuScreenRelControllerApiFp: (configuration?: Configuration) => {
    deleteMenuScreen(authorization: string, menuId?: string, screenId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getMenuScreens(authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, seq?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetMenuScreenOut>>;
    postMenuScreen(authorization: string, input: PostMenuScreensIn, menuId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const MenuScreenRelControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteMenuScreen(authorization: string, menuId?: string, screenId?: string, options?: any): AxiosPromise<void>;
    getMenuScreens(authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, seq?: number, options?: any): AxiosPromise<PagingGetMenuScreenOut>;
    postMenuScreen(authorization: string, input: PostMenuScreensIn, menuId?: string, options?: any): AxiosPromise<void>;
};
export declare class MenuScreenRelControllerApi extends BaseAPI {
    deleteMenuScreen(authorization: string, menuId?: string, screenId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getMenuScreens(authorization: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, screenId?: string, seq?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetMenuScreenOut, any>>;
    postMenuScreen(authorization: string, input: PostMenuScreensIn, menuId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
