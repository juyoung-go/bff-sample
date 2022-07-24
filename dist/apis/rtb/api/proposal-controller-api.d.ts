import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetProposalBldIn } from '../model';
import { GetProposalBselIn } from '../model';
import { GetProposalLwhIn } from '../model';
import { GetProposalPrdIn } from '../model';
import { Resource } from '../model';
export declare const ProposalControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    errorProposalNode: (authorization: string, pdfId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBldProposal: (authorization: string, input: GetProposalBldIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getBselProposal: (authorization: string, input: GetProposalBselIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhPrdProposalFile: (authorization: string, input: GetProposalPrdIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getLwhProposal: (authorization: string, input: GetProposalLwhIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getNmapUsingGET: (authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdCompareProposal: (authorization: string, prdId?: Array<string>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdProposal: (authorization: string, prdId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPrdProposalFile: (authorization: string, input: GetProposalPrdIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    updatePdfPath: (authorization: string, key?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ProposalControllerApiFp: (configuration?: Configuration) => {
    errorProposalNode(authorization: string, pdfId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getBldProposal(authorization: string, input: GetProposalBldIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getBselProposal(authorization: string, input: GetProposalBselIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getLwhPrdProposalFile(authorization: string, input: GetProposalPrdIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getLwhProposal(authorization: string, input: GetProposalLwhIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    getNmapUsingGET(authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getPrdCompareProposal(authorization: string, prdId?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
    getPrdProposal(authorization: string, prdId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
    getPrdProposalFile(authorization: string, input: GetProposalPrdIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
    updatePdfPath(authorization: string, key?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>>;
};
export declare const ProposalControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    errorProposalNode(authorization: string, pdfId: string, options?: any): AxiosPromise<number>;
    getBldProposal(authorization: string, input: GetProposalBldIn, options?: any): AxiosPromise<number>;
    getBselProposal(authorization: string, input: GetProposalBselIn, options?: any): AxiosPromise<number>;
    getLwhPrdProposalFile(authorization: string, input: GetProposalPrdIn, options?: any): AxiosPromise<number>;
    getLwhProposal(authorization: string, input: GetProposalLwhIn, options?: any): AxiosPromise<number>;
    getNmapUsingGET(authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: any): AxiosPromise<string>;
    getPrdCompareProposal(authorization: string, prdId?: Array<string>, options?: any): AxiosPromise<Resource>;
    getPrdProposal(authorization: string, prdId?: string, options?: any): AxiosPromise<Resource>;
    getPrdProposalFile(authorization: string, input: GetProposalPrdIn, options?: any): AxiosPromise<number>;
    updatePdfPath(authorization: string, key?: string, options?: any): AxiosPromise<number>;
};
export declare class ProposalControllerApi extends BaseAPI {
    errorProposalNode(authorization: string, pdfId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getBldProposal(authorization: string, input: GetProposalBldIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getBselProposal(authorization: string, input: GetProposalBselIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getLwhPrdProposalFile(authorization: string, input: GetProposalPrdIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getLwhProposal(authorization: string, input: GetProposalLwhIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    getNmapUsingGET(authorization: string, center: string, h: string, level: string, markers: Array<string>, scale: string, w: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getPrdCompareProposal(authorization: string, prdId?: Array<string>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
    getPrdProposal(authorization: string, prdId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
    getPrdProposalFile(authorization: string, input: GetProposalPrdIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
    updatePdfPath(authorization: string, key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<number, any>>;
}
