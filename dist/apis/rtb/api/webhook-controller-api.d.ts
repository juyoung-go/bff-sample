import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { WebhookMsgIn } from '../model';
export declare const WebhookControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    patchOpen: (authorization: string, msgIn: WebhookMsgIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const WebhookControllerApiFp: (configuration?: Configuration) => {
    patchOpen(authorization: string, msgIn: WebhookMsgIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const WebhookControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    patchOpen(authorization: string, msgIn: WebhookMsgIn, options?: any): AxiosPromise<void>;
};
export declare class WebhookControllerApi extends BaseAPI {
    patchOpen(authorization: string, msgIn: WebhookMsgIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
