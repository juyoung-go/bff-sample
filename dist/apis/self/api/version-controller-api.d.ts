import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { MyBody } from '../model';
import { MyBody2 } from '../model';
export declare const VersionControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getCoreVersion: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    versionControllerGetExecId: (id: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    versionControllerPostExec: (myBody2: MyBody2, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const VersionControllerApiFp: (configuration?: Configuration) => {
    getCoreVersion(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    versionControllerGetExecId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    versionControllerPostExec(myBody2: MyBody2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MyBody>>;
};
export declare const VersionControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getCoreVersion(options?: any): AxiosPromise<string>;
    versionControllerGetExecId(id: string, options?: any): AxiosPromise<string>;
    versionControllerPostExec(myBody2: MyBody2, options?: any): AxiosPromise<MyBody>;
};
export interface VersionControllerApiInterface {
    getCoreVersion(options?: AxiosRequestConfig): AxiosPromise<string>;
    versionControllerGetExecId(id: string, options?: AxiosRequestConfig): AxiosPromise<string>;
    versionControllerPostExec(myBody2: MyBody2, options?: AxiosRequestConfig): AxiosPromise<MyBody>;
}
export declare class VersionControllerApi extends BaseAPI implements VersionControllerApiInterface {
    getCoreVersion(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    versionControllerGetExecId(id: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    versionControllerPostExec(myBody2: MyBody2, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MyBody, any>>;
}
