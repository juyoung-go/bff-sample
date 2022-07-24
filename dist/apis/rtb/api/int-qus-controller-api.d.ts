import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetIntQusOut } from '../model';
import { PagingGetAllIntQusListOut } from '../model';
import { PostQusCusClnIn } from '../model';
import { SaveQusAnsIn } from '../model';
import { WwwQusHst } from '../model';
import { WwwQusProcHst } from '../model';
export declare const IntQusControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteIntQusCusCln: (authorization: string, qusId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAllIntQusListPaging: (authorization: string, email?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, qusId?: string, qusProcStatCd?: string, telNum?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getOneIntQus: (authorization: string, qusId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postIntQusAns: (authorization: string, qusId: string, input: SaveQusAnsIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postIntQusCusCln: (authorization: string, qusId: string, input: PostQusCusClnIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const IntQusControllerApiFp: (configuration?: Configuration) => {
    deleteIntQusCusCln(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WwwQusHst>>;
    getAllIntQusListPaging(authorization: string, email?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, qusId?: string, qusProcStatCd?: string, telNum?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllIntQusListOut>>;
    getOneIntQus(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetIntQusOut>>;
    postIntQusAns(authorization: string, qusId: string, input: SaveQusAnsIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WwwQusProcHst>>;
    postIntQusCusCln(authorization: string, qusId: string, input: PostQusCusClnIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WwwQusHst>>;
};
export declare const IntQusControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteIntQusCusCln(authorization: string, qusId: string, options?: any): AxiosPromise<WwwQusHst>;
    getAllIntQusListPaging(authorization: string, email?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, qusId?: string, qusProcStatCd?: string, telNum?: string, options?: any): AxiosPromise<PagingGetAllIntQusListOut>;
    getOneIntQus(authorization: string, qusId: string, options?: any): AxiosPromise<GetIntQusOut>;
    postIntQusAns(authorization: string, qusId: string, input: SaveQusAnsIn, options?: any): AxiosPromise<WwwQusProcHst>;
    postIntQusCusCln(authorization: string, qusId: string, input: PostQusCusClnIn, options?: any): AxiosPromise<WwwQusHst>;
};
export declare class IntQusControllerApi extends BaseAPI {
    deleteIntQusCusCln(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<WwwQusHst, any>>;
    getAllIntQusListPaging(authorization: string, email?: string, maxCreateDt?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, procUserId?: string, qusId?: string, qusProcStatCd?: string, telNum?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllIntQusListOut, any>>;
    getOneIntQus(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetIntQusOut, any>>;
    postIntQusAns(authorization: string, qusId: string, input: SaveQusAnsIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<WwwQusProcHst, any>>;
    postIntQusCusCln(authorization: string, qusId: string, input: PostQusCusClnIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<WwwQusHst, any>>;
}
