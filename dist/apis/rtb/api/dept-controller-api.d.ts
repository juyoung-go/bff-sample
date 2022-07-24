import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetDeptIdsOut } from '../model';
import { GetDeptOut } from '../model';
import { GetDeptOutForUser } from '../model';
import { PagingGetDeptOut } from '../model';
import { PatchDeptIn } from '../model';
import { PostDeptIn } from '../model';
export declare const DeptControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteDept: (authorization: string, deptId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDept: (authorization: string, deptId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDeptIdsBelowDeptId: (authorization: string, deptId?: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDeptListForUser: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDepts: (authorization: string, deptId?: string, deptName?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, parDeptId?: string, useYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchDept: (authorization: string, deptId: string, input: PatchDeptIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postDept: (authorization: string, input: PostDeptIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DeptControllerApiFp: (configuration?: Configuration) => {
    deleteDept(authorization: string, deptId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getDept(authorization: string, deptId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDeptOut>>;
    getDeptIdsBelowDeptId(authorization: string, deptId?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetDeptIdsOut>>>;
    getDeptListForUser(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDeptOutForUser>>;
    getDepts(authorization: string, deptId?: string, deptName?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, parDeptId?: string, useYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetDeptOut>>;
    patchDept(authorization: string, deptId: string, input: PatchDeptIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDeptOut>>;
    postDept(authorization: string, input: PostDeptIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDeptOut>>;
};
export declare const DeptControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteDept(authorization: string, deptId: string, options?: any): AxiosPromise<void>;
    getDept(authorization: string, deptId: string, options?: any): AxiosPromise<GetDeptOut>;
    getDeptIdsBelowDeptId(authorization: string, deptId?: Array<string>, options?: any): AxiosPromise<Array<GetDeptIdsOut>>;
    getDeptListForUser(authorization: string, options?: any): AxiosPromise<GetDeptOutForUser>;
    getDepts(authorization: string, deptId?: string, deptName?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, parDeptId?: string, useYn?: string, options?: any): AxiosPromise<PagingGetDeptOut>;
    patchDept(authorization: string, deptId: string, input: PatchDeptIn, options?: any): AxiosPromise<GetDeptOut>;
    postDept(authorization: string, input: PostDeptIn, options?: any): AxiosPromise<GetDeptOut>;
};
export declare class DeptControllerApi extends BaseAPI {
    deleteDept(authorization: string, deptId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getDept(authorization: string, deptId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDeptOut, any>>;
    getDeptIdsBelowDeptId(authorization: string, deptId?: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDeptIdsOut[], any>>;
    getDeptListForUser(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDeptOutForUser, any>>;
    getDepts(authorization: string, deptId?: string, deptName?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, parDeptId?: string, useYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetDeptOut, any>>;
    patchDept(authorization: string, deptId: string, input: PatchDeptIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDeptOut, any>>;
    postDept(authorization: string, input: PostDeptIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetDeptOut, any>>;
}
