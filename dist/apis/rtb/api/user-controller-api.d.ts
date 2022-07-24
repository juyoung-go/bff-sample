import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetUserOut } from '../model';
import { PagingGetUserOut } from '../model';
import { PatchUserIn } from '../model';
import { PostUserIn } from '../model';
import { UpdateUserPrvsnIn } from '../model';
export declare const UserControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteUser: (authorization: string, userId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getUser: (authorization: string, userId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getUsers: (authorization: string, deptHeadYn?: string, deptId?: string, email?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, serviceCd?: string, useYn?: string, userId?: string, userName?: string, userStatCd?: string, userTypeCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchUser: (authorization: string, userId: string, input: PatchUserIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postUser: (authorization: string, input: PostUserIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    releaseLock: (authorization: string, userId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    resetPwd: (authorization: string, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updateUserPrvsn: (authorization: string, userId: string, input: UpdateUserPrvsnIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updateUserPrvsnBldViewType: (authorization: string, userId: string, bldViewCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const UserControllerApiFp: (configuration?: Configuration) => {
    deleteUser(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getUser(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserOut>>;
    getUsers(authorization: string, deptHeadYn?: string, deptId?: string, email?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, serviceCd?: string, useYn?: string, userId?: string, userName?: string, userStatCd?: string, userTypeCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetUserOut>>;
    patchUser(authorization: string, userId: string, input: PatchUserIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserOut>>;
    postUser(authorization: string, input: PostUserIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserOut>>;
    releaseLock(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    resetPwd(authorization: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    updateUserPrvsn(authorization: string, userId: string, input: UpdateUserPrvsnIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    updateUserPrvsnBldViewType(authorization: string, userId: string, bldViewCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const UserControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteUser(authorization: string, userId: string, options?: any): AxiosPromise<void>;
    getUser(authorization: string, userId: string, options?: any): AxiosPromise<GetUserOut>;
    getUsers(authorization: string, deptHeadYn?: string, deptId?: string, email?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, serviceCd?: string, useYn?: string, userId?: string, userName?: string, userStatCd?: string, userTypeCd?: string, options?: any): AxiosPromise<PagingGetUserOut>;
    patchUser(authorization: string, userId: string, input: PatchUserIn, options?: any): AxiosPromise<GetUserOut>;
    postUser(authorization: string, input: PostUserIn, options?: any): AxiosPromise<GetUserOut>;
    releaseLock(authorization: string, userId: string, options?: any): AxiosPromise<void>;
    resetPwd(authorization: string, userId?: string, options?: any): AxiosPromise<void>;
    updateUserPrvsn(authorization: string, userId: string, input: UpdateUserPrvsnIn, options?: any): AxiosPromise<string>;
    updateUserPrvsnBldViewType(authorization: string, userId: string, bldViewCd?: string, options?: any): AxiosPromise<void>;
};
export declare class UserControllerApi extends BaseAPI {
    deleteUser(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getUser(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetUserOut, any>>;
    getUsers(authorization: string, deptHeadYn?: string, deptId?: string, email?: string, orderBy?: string, orgId?: string, pageNum?: number, pageSize?: number, serviceCd?: string, useYn?: string, userId?: string, userName?: string, userStatCd?: string, userTypeCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetUserOut, any>>;
    patchUser(authorization: string, userId: string, input: PatchUserIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetUserOut, any>>;
    postUser(authorization: string, input: PostUserIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetUserOut, any>>;
    releaseLock(authorization: string, userId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    resetPwd(authorization: string, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    updateUserPrvsn(authorization: string, userId: string, input: UpdateUserPrvsnIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    updateUserPrvsnBldViewType(authorization: string, userId: string, bldViewCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
