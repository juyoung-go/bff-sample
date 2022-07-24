import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetQusOut } from '../model';
import { PagingGetAllQusListOut } from '../model';
import { PostQusCusClnIn } from '../model';
import { SaveQusAnsIn } from '../model';
import { WwwQusHst } from '../model';
export declare const QusControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteQusCusCln: (authorization: string, qusId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAllQusListPaging: (authorization: string, bldId?: string, cmplYn?: string, maxCreateDt?: string, mbrName?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, qusId?: string, qusProcStatCd?: string, qusTypeCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getOneQus: (authorization: string, qusId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postQusAns: (authorization: string, qusId: string, input: SaveQusAnsIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postQusCusCln: (authorization: string, qusId: string, input: PostQusCusClnIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const QusControllerApiFp: (configuration?: Configuration) => {
    deleteQusCusCln(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WwwQusHst>>;
    getAllQusListPaging(authorization: string, bldId?: string, cmplYn?: string, maxCreateDt?: string, mbrName?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, qusId?: string, qusProcStatCd?: string, qusTypeCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetAllQusListOut>>;
    getOneQus(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQusOut>>;
    postQusAns(authorization: string, qusId: string, input: SaveQusAnsIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetQusOut>>;
    postQusCusCln(authorization: string, qusId: string, input: PostQusCusClnIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WwwQusHst>>;
};
export declare const QusControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteQusCusCln(authorization: string, qusId: string, options?: any): AxiosPromise<WwwQusHst>;
    getAllQusListPaging(authorization: string, bldId?: string, cmplYn?: string, maxCreateDt?: string, mbrName?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, qusId?: string, qusProcStatCd?: string, qusTypeCd?: string, options?: any): AxiosPromise<PagingGetAllQusListOut>;
    getOneQus(authorization: string, qusId: string, options?: any): AxiosPromise<GetQusOut>;
    postQusAns(authorization: string, qusId: string, input: SaveQusAnsIn, options?: any): AxiosPromise<GetQusOut>;
    postQusCusCln(authorization: string, qusId: string, input: PostQusCusClnIn, options?: any): AxiosPromise<WwwQusHst>;
};
export declare class QusControllerApi extends BaseAPI {
    deleteQusCusCln(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<WwwQusHst, any>>;
    getAllQusListPaging(authorization: string, bldId?: string, cmplYn?: string, maxCreateDt?: string, mbrName?: string, minCreateDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, qusId?: string, qusProcStatCd?: string, qusTypeCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetAllQusListOut, any>>;
    getOneQus(authorization: string, qusId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetQusOut, any>>;
    postQusAns(authorization: string, qusId: string, input: SaveQusAnsIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetQusOut, any>>;
    postQusCusCln(authorization: string, qusId: string, input: PostQusCusClnIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<WwwQusHst, any>>;
}
