import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { ComMsgMst } from '../model';
import { ComPrmtMst } from '../model';
import { ComTermMst } from '../model';
export declare const CopyControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    receiveCodes: (authorization: string, input: object, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    receiveMessages: (authorization: string, input: Array<ComMsgMst>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    receiveParameters: (authorization: string, input: Array<ComPrmtMst>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    receiveTerms: (authorization: string, input: Array<ComTermMst>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    sendCodes: (authorization: string, codeList: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    sendMessages: (authorization: string, msgIdList: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    sendParameters: (authorization: string, prmtIdList: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    sendTerms: (authorization: string, termIdList: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const CopyControllerApiFp: (configuration?: Configuration) => {
    receiveCodes(authorization: string, input: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    receiveMessages(authorization: string, input: Array<ComMsgMst>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    receiveParameters(authorization: string, input: Array<ComPrmtMst>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    receiveTerms(authorization: string, input: Array<ComTermMst>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    sendCodes(authorization: string, codeList: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    sendMessages(authorization: string, msgIdList: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    sendParameters(authorization: string, prmtIdList: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    sendTerms(authorization: string, termIdList: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const CopyControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    receiveCodes(authorization: string, input: object, options?: any): AxiosPromise<string>;
    receiveMessages(authorization: string, input: Array<ComMsgMst>, options?: any): AxiosPromise<string>;
    receiveParameters(authorization: string, input: Array<ComPrmtMst>, options?: any): AxiosPromise<string>;
    receiveTerms(authorization: string, input: Array<ComTermMst>, options?: any): AxiosPromise<string>;
    sendCodes(authorization: string, codeList: Array<string>, options?: any): AxiosPromise<string>;
    sendMessages(authorization: string, msgIdList: Array<string>, options?: any): AxiosPromise<string>;
    sendParameters(authorization: string, prmtIdList: Array<string>, options?: any): AxiosPromise<string>;
    sendTerms(authorization: string, termIdList: Array<string>, options?: any): AxiosPromise<string>;
};
export declare class CopyControllerApi extends BaseAPI {
    receiveCodes(authorization: string, input: object, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    receiveMessages(authorization: string, input: Array<ComMsgMst>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    receiveParameters(authorization: string, input: Array<ComPrmtMst>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    receiveTerms(authorization: string, input: Array<ComTermMst>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    sendCodes(authorization: string, codeList: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    sendMessages(authorization: string, msgIdList: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    sendParameters(authorization: string, prmtIdList: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    sendTerms(authorization: string, termIdList: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
