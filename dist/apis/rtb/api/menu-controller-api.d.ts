import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetMenuOut } from '../model';
import { PagingGetMenuOut } from '../model';
import { PatchMenuIn } from '../model';
import { PostMenuIn } from '../model';
export declare const MenuControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteMenu: (authorization: string, menuId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMenu: (authorization: string, menuId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMenus: (authorization: string, catgYn?: string, dispYn?: string, expl?: string, menuDispName?: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, parMenuDispName?: string, parMenuId?: string, serviceCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMenusMngList: (authorization: string, serviceCd: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchMenu: (authorization: string, menuId: string, input: PatchMenuIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchMenuDispSeqDown: (authorization: string, menuId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchMenuDispSeqUp: (authorization: string, menuId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    saveMenu: (authorization: string, input: PostMenuIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MenuControllerApiFp: (configuration?: Configuration) => {
    deleteMenu(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getMenu(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMenuOut>>;
    getMenus(authorization: string, catgYn?: string, dispYn?: string, expl?: string, menuDispName?: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, parMenuDispName?: string, parMenuId?: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetMenuOut>>;
    getMenusMngList(authorization: string, serviceCd: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetMenuOut>>>;
    patchMenu(authorization: string, menuId: string, input: PatchMenuIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMenuOut>>;
    patchMenuDispSeqDown(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    patchMenuDispSeqUp(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    saveMenu(authorization: string, input: PostMenuIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMenuOut>>;
};
export declare const MenuControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteMenu(authorization: string, menuId: string, options?: any): AxiosPromise<void>;
    getMenu(authorization: string, menuId: string, options?: any): AxiosPromise<GetMenuOut>;
    getMenus(authorization: string, catgYn?: string, dispYn?: string, expl?: string, menuDispName?: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, parMenuDispName?: string, parMenuId?: string, serviceCd?: string, options?: any): AxiosPromise<PagingGetMenuOut>;
    getMenusMngList(authorization: string, serviceCd: string, options?: any): AxiosPromise<Array<GetMenuOut>>;
    patchMenu(authorization: string, menuId: string, input: PatchMenuIn, options?: any): AxiosPromise<GetMenuOut>;
    patchMenuDispSeqDown(authorization: string, menuId: string, options?: any): AxiosPromise<void>;
    patchMenuDispSeqUp(authorization: string, menuId: string, options?: any): AxiosPromise<void>;
    saveMenu(authorization: string, input: PostMenuIn, options?: any): AxiosPromise<GetMenuOut>;
};
export declare class MenuControllerApi extends BaseAPI {
    deleteMenu(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getMenu(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetMenuOut, any>>;
    getMenus(authorization: string, catgYn?: string, dispYn?: string, expl?: string, menuDispName?: string, menuId?: string, orderBy?: string, pageNum?: number, pageSize?: number, parMenuDispName?: string, parMenuId?: string, serviceCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetMenuOut, any>>;
    getMenusMngList(authorization: string, serviceCd: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetMenuOut[], any>>;
    patchMenu(authorization: string, menuId: string, input: PatchMenuIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetMenuOut, any>>;
    patchMenuDispSeqDown(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    patchMenuDispSeqUp(authorization: string, menuId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    saveMenu(authorization: string, input: PostMenuIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetMenuOut, any>>;
}
