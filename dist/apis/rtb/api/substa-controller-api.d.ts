import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { DeleteSubstaRelIn } from '../model';
import { GetSublineOut } from '../model';
import { GetSublineRegnOut } from '../model';
import { GetSubstaOut } from '../model';
import { GetSubstaPatchOut } from '../model';
import { PagingGetSublineOut } from '../model';
import { PagingGetSubstaForModalOut } from '../model';
import { PagingGetSubstaForModalPatchOut } from '../model';
import { PatchSubstaIn } from '../model';
import { PatchSubstaRelIn } from '../model';
import { PostSublineIn } from '../model';
import { PostSubstaForModalIn } from '../model';
export declare const SubstaControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteSubline: (authorization: string, sublineId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteSublineSubsta: (authorization: string, input: DeleteSubstaRelIn, substaId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    deleteSubsta: (authorization: string, substaId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getRegnFilter: (authorization: string, comCd?: string, comCdName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSubline: (authorization: string, sublineId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSublineListForModal: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, substaId?: string, substaName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSublinePaging: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, sublineId?: string, sublineName?: Array<string>, sublineRegnCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSubstaForModalPatch: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, sublineName?: string, substaId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSubstaOne: (authorization: string, sublineId: string, substaId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSubstaPaging: (authorization: string, lat?: number, lng?: number, sublineId?: Array<string>, substaId?: string, substaName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchSubline: (authorization: string, sublineId: string, input: PostSublineIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchSublineSubsta: (authorization: string, input: PatchSubstaRelIn, substaId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchSubsta: (authorization: string, substaId: string, input: PatchSubstaIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postSubline: (authorization: string, input: PostSublineIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postSubsta: (authorization: string, input: PostSubstaForModalIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const SubstaControllerApiFp: (configuration?: Configuration) => {
    deleteSubline(authorization: string, sublineId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteSublineSubsta(authorization: string, input: DeleteSubstaRelIn, substaId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteSubsta(authorization: string, substaId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getRegnFilter(authorization: string, comCd?: string, comCdName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSublineRegnOut>>>;
    getSubline(authorization: string, sublineId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSublineOut>>;
    getSublineListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, substaId?: string, substaName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSubstaForModalOut>>;
    getSublinePaging(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, sublineId?: string, sublineName?: Array<string>, sublineRegnCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSublineOut>>;
    getSubstaForModalPatch(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, sublineName?: string, substaId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetSubstaForModalPatchOut>>;
    getSubstaOne(authorization: string, sublineId: string, substaId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSubstaOut>>;
    getSubstaPaging(authorization: string, lat?: number, lng?: number, sublineId?: Array<string>, substaId?: string, substaName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSubstaOut>>>;
    patchSubline(authorization: string, sublineId: string, input: PostSublineIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSublineOut>>;
    patchSublineSubsta(authorization: string, input: PatchSubstaRelIn, substaId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSubstaPatchOut>>>;
    patchSubsta(authorization: string, substaId: string, input: PatchSubstaIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSubstaOut>>>;
    postSubline(authorization: string, input: PostSublineIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSublineOut>>;
    postSubsta(authorization: string, input: PostSubstaForModalIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSubstaOut>>>;
};
export declare const SubstaControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteSubline(authorization: string, sublineId: string, options?: any): AxiosPromise<void>;
    deleteSublineSubsta(authorization: string, input: DeleteSubstaRelIn, substaId?: string, options?: any): AxiosPromise<void>;
    deleteSubsta(authorization: string, substaId: string, options?: any): AxiosPromise<void>;
    getRegnFilter(authorization: string, comCd?: string, comCdName?: string, options?: any): AxiosPromise<Array<GetSublineRegnOut>>;
    getSubline(authorization: string, sublineId: string, options?: any): AxiosPromise<GetSublineOut>;
    getSublineListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, substaId?: string, substaName?: string, options?: any): AxiosPromise<PagingGetSubstaForModalOut>;
    getSublinePaging(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, sublineId?: string, sublineName?: Array<string>, sublineRegnCd?: string, options?: any): AxiosPromise<PagingGetSublineOut>;
    getSubstaForModalPatch(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, sublineName?: string, substaId?: string, options?: any): AxiosPromise<PagingGetSubstaForModalPatchOut>;
    getSubstaOne(authorization: string, sublineId: string, substaId: string, options?: any): AxiosPromise<GetSubstaOut>;
    getSubstaPaging(authorization: string, lat?: number, lng?: number, sublineId?: Array<string>, substaId?: string, substaName?: string, options?: any): AxiosPromise<Array<GetSubstaOut>>;
    patchSubline(authorization: string, sublineId: string, input: PostSublineIn, options?: any): AxiosPromise<GetSublineOut>;
    patchSublineSubsta(authorization: string, input: PatchSubstaRelIn, substaId?: string, options?: any): AxiosPromise<Array<GetSubstaPatchOut>>;
    patchSubsta(authorization: string, substaId: string, input: PatchSubstaIn, options?: any): AxiosPromise<Array<GetSubstaOut>>;
    postSubline(authorization: string, input: PostSublineIn, options?: any): AxiosPromise<GetSublineOut>;
    postSubsta(authorization: string, input: PostSubstaForModalIn, options?: any): AxiosPromise<Array<GetSubstaOut>>;
};
export declare class SubstaControllerApi extends BaseAPI {
    deleteSubline(authorization: string, sublineId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteSublineSubsta(authorization: string, input: DeleteSubstaRelIn, substaId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    deleteSubsta(authorization: string, substaId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getRegnFilter(authorization: string, comCd?: string, comCdName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSublineRegnOut[], any>>;
    getSubline(authorization: string, sublineId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSublineOut, any>>;
    getSublineListForModal(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, substaId?: string, substaName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSubstaForModalOut, any>>;
    getSublinePaging(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, sublineId?: string, sublineName?: Array<string>, sublineRegnCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSublineOut, any>>;
    getSubstaForModalPatch(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, searchCf?: string, searchVal?: string, sublineId?: string, sublineName?: string, substaId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetSubstaForModalPatchOut, any>>;
    getSubstaOne(authorization: string, sublineId: string, substaId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSubstaOut, any>>;
    getSubstaPaging(authorization: string, lat?: number, lng?: number, sublineId?: Array<string>, substaId?: string, substaName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSubstaOut[], any>>;
    patchSubline(authorization: string, sublineId: string, input: PostSublineIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSublineOut, any>>;
    patchSublineSubsta(authorization: string, input: PatchSubstaRelIn, substaId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSubstaPatchOut[], any>>;
    patchSubsta(authorization: string, substaId: string, input: PatchSubstaIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSubstaOut[], any>>;
    postSubline(authorization: string, input: PostSublineIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSublineOut, any>>;
    postSubsta(authorization: string, input: PostSubstaForModalIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetSubstaOut[], any>>;
}
