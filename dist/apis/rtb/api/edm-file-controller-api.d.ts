import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetEdmFileListOut } from '../model';
import { GetFilesOut } from '../model';
import { Resource } from '../model';
export declare const EdmFileControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    createFolder: (authorization: string, folderName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteFile: (authorization: string, fileName: string, folderName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteFolder: (authorization: string, folderName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    downloadEdmFile: (authorization: string, emailSendReqSeq?: number, emailTmplId?: string, seq?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEdmFileList: (authorization: string, emailTmplId: string, seq: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getFileList: (authorization: string, folderName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getFolderList: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postFile: (authorization: string, folderName: string, fileName?: any, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    uploadFiles: (authorization: string, emailSendReqSeq: Array<number>, emailTmplId: string, idx: number, size: number, file?: any, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const EdmFileControllerApiFp: (configuration?: Configuration) => {
    createFolder(authorization: string, folderName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteFile(authorization: string, fileName: string, folderName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteFolder(authorization: string, folderName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    downloadEdmFile(authorization: string, emailSendReqSeq?: number, emailTmplId?: string, seq?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Resource>>;
    getEdmFileList(authorization: string, emailTmplId: string, seq: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEdmFileListOut>>>;
    getFileList(authorization: string, folderName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetFilesOut>>>;
    getFolderList(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>>;
    postFile(authorization: string, folderName: string, fileName?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    uploadFiles(authorization: string, emailSendReqSeq: Array<number>, emailTmplId: string, idx: number, size: number, file?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const EdmFileControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    createFolder(authorization: string, folderName: string, options?: any): AxiosPromise<void>;
    deleteFile(authorization: string, fileName: string, folderName: string, options?: any): AxiosPromise<void>;
    deleteFolder(authorization: string, folderName: string, options?: any): AxiosPromise<void>;
    downloadEdmFile(authorization: string, emailSendReqSeq?: number, emailTmplId?: string, seq?: number, options?: any): AxiosPromise<Resource>;
    getEdmFileList(authorization: string, emailTmplId: string, seq: number, options?: any): AxiosPromise<Array<GetEdmFileListOut>>;
    getFileList(authorization: string, folderName: string, options?: any): AxiosPromise<Array<GetFilesOut>>;
    getFolderList(authorization: string, options?: any): AxiosPromise<Array<string>>;
    postFile(authorization: string, folderName: string, fileName?: any, options?: any): AxiosPromise<void>;
    uploadFiles(authorization: string, emailSendReqSeq: Array<number>, emailTmplId: string, idx: number, size: number, file?: any, options?: any): AxiosPromise<void>;
};
export declare class EdmFileControllerApi extends BaseAPI {
    createFolder(authorization: string, folderName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteFile(authorization: string, fileName: string, folderName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteFolder(authorization: string, folderName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    downloadEdmFile(authorization: string, emailSendReqSeq?: number, emailTmplId?: string, seq?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Resource, any>>;
    getEdmFileList(authorization: string, emailTmplId: string, seq: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEdmFileListOut[], any>>;
    getFileList(authorization: string, folderName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetFilesOut[], any>>;
    getFolderList(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string[], any>>;
    postFile(authorization: string, folderName: string, fileName?: any, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    uploadFiles(authorization: string, emailSendReqSeq: Array<number>, emailTmplId: string, idx: number, size: number, file?: any, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
