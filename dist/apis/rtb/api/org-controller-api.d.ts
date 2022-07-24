import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetOrgOut } from '../model';
import { PagingGetOrgOut } from '../model';
import { PatchOrgIn } from '../model';
import { PostOrgIn } from '../model';
export declare const OrgControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteOrg: (authorization: string, orgId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getOrg: (authorization: string, orgId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getOrgs: (authorization: string, aliasName?: string, orderBy?: string, orgId?: string, orgName?: string, orgTypeCd?: string, pageNum?: number, pageSize?: number, parOrgId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchOrg: (authorization: string, orgId: string, input: PatchOrgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postOrg: (authorization: string, input: PostOrgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const OrgControllerApiFp: (configuration?: Configuration) => {
    deleteOrg(authorization: string, orgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getOrg(authorization: string, orgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOrgOut>>;
    getOrgs(authorization: string, aliasName?: string, orderBy?: string, orgId?: string, orgName?: string, orgTypeCd?: string, pageNum?: number, pageSize?: number, parOrgId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetOrgOut>>;
    patchOrg(authorization: string, orgId: string, input: PatchOrgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOrgOut>>;
    postOrg(authorization: string, input: PostOrgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOrgOut>>;
};
export declare const OrgControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteOrg(authorization: string, orgId: string, options?: any): AxiosPromise<void>;
    getOrg(authorization: string, orgId: string, options?: any): AxiosPromise<GetOrgOut>;
    getOrgs(authorization: string, aliasName?: string, orderBy?: string, orgId?: string, orgName?: string, orgTypeCd?: string, pageNum?: number, pageSize?: number, parOrgId?: string, options?: any): AxiosPromise<PagingGetOrgOut>;
    patchOrg(authorization: string, orgId: string, input: PatchOrgIn, options?: any): AxiosPromise<GetOrgOut>;
    postOrg(authorization: string, input: PostOrgIn, options?: any): AxiosPromise<GetOrgOut>;
};
export declare class OrgControllerApi extends BaseAPI {
    deleteOrg(authorization: string, orgId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getOrg(authorization: string, orgId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetOrgOut, any>>;
    getOrgs(authorization: string, aliasName?: string, orderBy?: string, orgId?: string, orgName?: string, orgTypeCd?: string, pageNum?: number, pageSize?: number, parOrgId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetOrgOut, any>>;
    patchOrg(authorization: string, orgId: string, input: PatchOrgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetOrgOut, any>>;
    postOrg(authorization: string, input: PostOrgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetOrgOut, any>>;
}
