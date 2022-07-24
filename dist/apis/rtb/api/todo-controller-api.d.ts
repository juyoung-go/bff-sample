import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetTodoWithDistinctRelCd } from '../model';
import { MtaTodoMst } from '../model';
import { PagingGetTodoOut } from '../model';
import { PatchTodoIn } from '../model';
import { PostTodoIn } from '../model';
import { SaveTodoIn } from '../model';
export declare const TodoControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteTodo: (authorization: string, todoId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getAllTodos: (authorization: string, maxRegDy?: string, minRegDy?: string, ptbUserName?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, todoCtn?: string, todoTgtRelCd?: string, userDeptName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getMineTodos: (authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getParTaskIdByChdTaskIdAndChdTaskCfCd: (authorization: string, chdTaskCfCd?: string, chdTaskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getPtbUserIdsByDealId: (authorization: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getTodoListByTgtId: (authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchTodo: (authorization: string, todoId: string, input: PatchTodoIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postTodo: (authorization: string, input: SaveTodoIn, todoTgtRelCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postTodos: (authorization: string, input: PostTodoIn, todoTgtRelCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const TodoControllerApiFp: (configuration?: Configuration) => {
    deleteTodo(authorization: string, todoId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAllTodos(authorization: string, maxRegDy?: string, minRegDy?: string, ptbUserName?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, todoCtn?: string, todoTgtRelCd?: string, userDeptName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTodoWithDistinctRelCd>>;
    getMineTodos(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetTodoOut>>;
    getParTaskIdByChdTaskIdAndChdTaskCfCd(authorization: string, chdTaskCfCd?: string, chdTaskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getPtbUserIdsByDealId(authorization: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>>;
    getTodoListByTgtId(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetTodoOut>>;
    patchTodo(authorization: string, todoId: string, input: PatchTodoIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MtaTodoMst>>;
    postTodo(authorization: string, input: SaveTodoIn, todoTgtRelCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MtaTodoMst>>;
    postTodos(authorization: string, input: PostTodoIn, todoTgtRelCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const TodoControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteTodo(authorization: string, todoId: string, options?: any): AxiosPromise<void>;
    getAllTodos(authorization: string, maxRegDy?: string, minRegDy?: string, ptbUserName?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, todoCtn?: string, todoTgtRelCd?: string, userDeptName?: string, options?: any): AxiosPromise<GetTodoWithDistinctRelCd>;
    getMineTodos(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: any): AxiosPromise<PagingGetTodoOut>;
    getParTaskIdByChdTaskIdAndChdTaskCfCd(authorization: string, chdTaskCfCd?: string, chdTaskId?: string, options?: any): AxiosPromise<string>;
    getPtbUserIdsByDealId(authorization: string, taskId?: string, options?: any): AxiosPromise<Array<string>>;
    getTodoListByTgtId(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: any): AxiosPromise<PagingGetTodoOut>;
    patchTodo(authorization: string, todoId: string, input: PatchTodoIn, options?: any): AxiosPromise<MtaTodoMst>;
    postTodo(authorization: string, input: SaveTodoIn, todoTgtRelCd?: string, options?: any): AxiosPromise<MtaTodoMst>;
    postTodos(authorization: string, input: PostTodoIn, todoTgtRelCd?: string, options?: any): AxiosPromise<void>;
};
export declare class TodoControllerApi extends BaseAPI {
    deleteTodo(authorization: string, todoId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getAllTodos(authorization: string, maxRegDy?: string, minRegDy?: string, ptbUserName?: string, subRelCd?: string, taskCfCd?: string, tgtId?: string, todoCtn?: string, todoTgtRelCd?: string, userDeptName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetTodoWithDistinctRelCd, any>>;
    getMineTodos(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetTodoOut, any>>;
    getParTaskIdByChdTaskIdAndChdTaskCfCd(authorization: string, chdTaskCfCd?: string, chdTaskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getPtbUserIdsByDealId(authorization: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string[], any>>;
    getTodoListByTgtId(authorization: string, cmplYn?: string, maxCmplDt?: string, maxStartDt?: string, minCmplDt?: string, minStartDt?: string, orderBy?: string, pageNum?: number, pageSize?: number, tgtId?: string, todoTgtRelCd?: string, userId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetTodoOut, any>>;
    patchTodo(authorization: string, todoId: string, input: PatchTodoIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MtaTodoMst, any>>;
    postTodo(authorization: string, input: SaveTodoIn, todoTgtRelCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MtaTodoMst, any>>;
    postTodos(authorization: string, input: PostTodoIn, todoTgtRelCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
