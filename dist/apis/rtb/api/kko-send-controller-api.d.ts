import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
export declare const KkoSendControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    postKkoSend: (authorization: string, listArgs: Array<string>, mbrId?: string, phone?: string, tmplCdVal?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const KkoSendControllerApiFp: (configuration?: Configuration) => {
    postKkoSend(authorization: string, listArgs: Array<string>, mbrId?: string, phone?: string, tmplCdVal?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const KkoSendControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    postKkoSend(authorization: string, listArgs: Array<string>, mbrId?: string, phone?: string, tmplCdVal?: string, options?: any): AxiosPromise<string>;
};
export declare class KkoSendControllerApi extends BaseAPI {
    postKkoSend(authorization: string, listArgs: Array<string>, mbrId?: string, phone?: string, tmplCdVal?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
