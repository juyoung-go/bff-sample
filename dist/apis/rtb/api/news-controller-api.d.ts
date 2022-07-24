import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetNewsOut } from '../model';
import { PagingGetNewsOut } from '../model';
import { PatchNewsIn } from '../model';
import { PostNewsIn } from '../model';
export declare const NewsControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteNews: (authorization: string, newsId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getNews: (authorization: string, newsId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getNewsList: (authorization: string, mediaCd?: string, newsSbj?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchNews: (authorization: string, newsId: string, input: PatchNewsIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postNews: (authorization: string, input: PostNewsIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const NewsControllerApiFp: (configuration?: Configuration) => {
    deleteNews(authorization: string, newsId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getNews(authorization: string, newsId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetNewsOut>>;
    getNewsList(authorization: string, mediaCd?: string, newsSbj?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetNewsOut>>;
    patchNews(authorization: string, newsId: string, input: PatchNewsIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    postNews(authorization: string, input: PostNewsIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const NewsControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteNews(authorization: string, newsId: string, options?: any): AxiosPromise<void>;
    getNews(authorization: string, newsId: string, options?: any): AxiosPromise<GetNewsOut>;
    getNewsList(authorization: string, mediaCd?: string, newsSbj?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetNewsOut>;
    patchNews(authorization: string, newsId: string, input: PatchNewsIn, options?: any): AxiosPromise<void>;
    postNews(authorization: string, input: PostNewsIn, options?: any): AxiosPromise<string>;
};
export declare class NewsControllerApi extends BaseAPI {
    deleteNews(authorization: string, newsId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getNews(authorization: string, newsId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetNewsOut, any>>;
    getNewsList(authorization: string, mediaCd?: string, newsSbj?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetNewsOut, any>>;
    patchNews(authorization: string, newsId: string, input: PatchNewsIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    postNews(authorization: string, input: PostNewsIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
