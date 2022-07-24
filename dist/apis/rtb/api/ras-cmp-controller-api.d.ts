import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetCmpOut } from '../model';
export declare const RasCmpControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    getCmpListByRoleIds: (authorization: string, roleIds?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const RasCmpControllerApiFp: (configuration?: Configuration) => {
    getCmpListByRoleIds(authorization: string, roleIds?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCmpOut>>>;
};
export declare const RasCmpControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getCmpListByRoleIds(authorization: string, roleIds?: string, options?: any): AxiosPromise<Array<GetCmpOut>>;
};
export declare class RasCmpControllerApi extends BaseAPI {
    getCmpListByRoleIds(authorization: string, roleIds?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCmpOut[], any>>;
}
