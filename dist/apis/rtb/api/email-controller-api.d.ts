import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetClnEmlRvrOut } from '../model';
import { GetClnRvrPagingIn } from '../model';
import { GetCusEmlRvrOut } from '../model';
import { GetCusRvrPagingIn } from '../model';
import { GetEmlCompDtlOut } from '../model';
import { GetEmlRvrOut } from '../model';
import { GetEmlSendListOut } from '../model';
import { GetEmlSendStateDtlOut } from '../model';
import { GetEmlTmplOut } from '../model';
import { GetGtdEmlRvrOut } from '../model';
import { GetGtdRvrPagingIn } from '../model';
import { GetPrdContrPayOut } from '../model';
import { GetUserEmlFailOut } from '../model';
import { GetWebEmlRvrOut } from '../model';
import { GetWebRvrPagingIn } from '../model';
import { PagingGetDealEdmDtlOut } from '../model';
import { PagingGetEmailSendHstOut } from '../model';
import { PagingGetEmlCompDtlListOut } from '../model';
import { PagingGetEmlCompOut } from '../model';
import { PagingGetEmlFailOut } from '../model';
import { PagingGetEmlSendStateOut } from '../model';
import { PagingGetEmlTmplOut } from '../model';
import { PagingGetFeeEdmDtlOut } from '../model';
import { PagingGetUsubsEmlOut } from '../model';
import { PatchEmlTmplIn } from '../model';
import { PostEmlTmplIn } from '../model';
export declare const EmailControllerApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteEmlTmpl: (authorization: string, emailTmplId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getClnDtl: (authorization: string, clnId?: string, conId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getClnEmlRvrList: (authorization: string, addr?: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getClnRvrPaging: (authorization: string, input: GetClnRvrPagingIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCusEmlRvrList: (authorization: string, cusId?: string, cusName?: string, email?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getCusRvrPaging: (authorization: string, input: GetCusRvrPagingIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDealEdmDtl: (authorization: string, taskId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getDealEdmReplace: (authorization: string, taskId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEdmContrDtlReplace: (authorization: string, contrId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEdmFeeReplace: (authorization: string, contrId: string, feeId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEdmTmpl: (authorization: string, emailTmplId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmailSendHst: (authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParPk?: string, rcvrParTypeCd?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlContrList: (authorization: string, contrId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlContrPay: (authorization: string, contrId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlFailList: (authorization: string, addr?: string, emailSbj?: string, emailTmplId?: string, maxFailCnt?: number, maxSendCompDy?: string, maxSendDy?: string, minFailCnt?: number, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrName?: string, senderEmail?: string, senderId?: string, seq?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlFeeList: (authorization: string, contrId: string, feeId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlSendCompDtlList: (authorization: string, emailTmplId: string, id: number, linkClickYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrEmail?: string, rcvrName?: string, readYn?: string, spamYn?: string, usubsYn?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlSendCompDtlOne: (authorization: string, emailTmplId: string, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlSendCompList: (authorization: string, emailSbj?: string, maxSendCompDy?: string, maxSendDy?: string, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlSendStateDtlOne: (authorization: string, emailTmplId: string, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlSendStateList: (authorization: string, emailSbj?: string, maxSendDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlTmplList: (authorization: string, activeYn?: string, emailTmplName?: string, emailTmplTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getEmlTmplOne: (authorization: string, tmplId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getGtdDtlRvrPaging: (authorization: string, conId?: string, taskId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getGtdRvrPaging: (authorization: string, input: GetGtdRvrPagingIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getOrdRcvrPaging: (authorization: string, conId?: string, ordId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getProjDtlRvrPaging: (authorization: string, conId?: string, projId?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getSendEmlList: (authorization: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getUserEmlFailList: (authorization: string, rcvrEmail: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getUsubsEmlList: (authorization: string, maxUsubsDt?: string, minUsubsDt?: string, name?: string, orderBy?: string, pageNum?: number, pageSize?: number, usubsCd?: string, usubsEmail?: string, usubsName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getWebEmlList: (authorization: string, email?: string, mbrId?: string, mbrName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getWebRvrPaging: (authorization: string, input: GetWebRvrPagingIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    getWrkEmlList: (authorization: string, clnName?: string, taskId?: string, taskName?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    patchEmlTmpl: (authorization: string, emailTmplId: string, input: PatchEmlTmplIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    postEmlTmpl: (authorization: string, input: PostEmlTmplIn, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const EmailControllerApiFp: (configuration?: Configuration) => {
    deleteEmlTmpl(authorization: string, emailTmplId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getClnDtl(authorization: string, clnId?: string, conId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlRvrOut>>;
    getClnEmlRvrList(authorization: string, addr?: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetClnEmlRvrOut>>>;
    getClnRvrPaging(authorization: string, input: GetClnRvrPagingIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlRvrOut>>>;
    getCusEmlRvrList(authorization: string, cusId?: string, cusName?: string, email?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCusEmlRvrOut>>>;
    getCusRvrPaging(authorization: string, input: GetCusRvrPagingIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlRvrOut>>>;
    getDealEdmDtl(authorization: string, taskId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetDealEdmDtlOut>>;
    getDealEdmReplace(authorization: string, taskId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>>;
    getEdmContrDtlReplace(authorization: string, contrId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getEdmFeeReplace(authorization: string, contrId: string, feeId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getEdmTmpl(authorization: string, emailTmplId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlTmplOut>>;
    getEmailSendHst(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParPk?: string, rcvrParTypeCd?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetEmailSendHstOut>>;
    getEmlContrList(authorization: string, contrId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetDealEdmDtlOut>>;
    getEmlContrPay(authorization: string, contrId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetPrdContrPayOut>>>;
    getEmlFailList(authorization: string, addr?: string, emailSbj?: string, emailTmplId?: string, maxFailCnt?: number, maxSendCompDy?: string, maxSendDy?: string, minFailCnt?: number, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrName?: string, senderEmail?: string, senderId?: string, seq?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetEmlFailOut>>;
    getEmlFeeList(authorization: string, contrId: string, feeId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetFeeEdmDtlOut>>;
    getEmlSendCompDtlList(authorization: string, emailTmplId: string, id: number, linkClickYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrEmail?: string, rcvrName?: string, readYn?: string, spamYn?: string, usubsYn?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetEmlCompDtlListOut>>;
    getEmlSendCompDtlOne(authorization: string, emailTmplId: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlCompDtlOut>>;
    getEmlSendCompList(authorization: string, emailSbj?: string, maxSendCompDy?: string, maxSendDy?: string, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetEmlCompOut>>;
    getEmlSendStateDtlOne(authorization: string, emailTmplId: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlSendStateDtlOut>>;
    getEmlSendStateList(authorization: string, emailSbj?: string, maxSendDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetEmlSendStateOut>>;
    getEmlTmplList(authorization: string, activeYn?: string, emailTmplName?: string, emailTmplTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetEmlTmplOut>>;
    getEmlTmplOne(authorization: string, tmplId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlTmplOut>>;
    getGtdDtlRvrPaging(authorization: string, conId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlRvrOut>>>;
    getGtdRvrPaging(authorization: string, input: GetGtdRvrPagingIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlRvrOut>>>;
    getOrdRcvrPaging(authorization: string, conId?: string, ordId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlRvrOut>>>;
    getProjDtlRvrPaging(authorization: string, conId?: string, projId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlRvrOut>>>;
    getSendEmlList(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlSendListOut>>>;
    getUserEmlFailList(authorization: string, rcvrEmail: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetUserEmlFailOut>>>;
    getUsubsEmlList(authorization: string, maxUsubsDt?: string, minUsubsDt?: string, name?: string, orderBy?: string, pageNum?: number, pageSize?: number, usubsCd?: string, usubsEmail?: string, usubsName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingGetUsubsEmlOut>>;
    getWebEmlList(authorization: string, email?: string, mbrId?: string, mbrName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetWebEmlRvrOut>>>;
    getWebRvrPaging(authorization: string, input: GetWebRvrPagingIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEmlRvrOut>>>;
    getWrkEmlList(authorization: string, clnName?: string, taskId?: string, taskName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetGtdEmlRvrOut>>>;
    patchEmlTmpl(authorization: string, emailTmplId: string, input: PatchEmlTmplIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlTmplOut>>;
    postEmlTmpl(authorization: string, input: PostEmlTmplIn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEmlTmplOut>>;
};
export declare const EmailControllerApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteEmlTmpl(authorization: string, emailTmplId: string, options?: any): AxiosPromise<void>;
    getClnDtl(authorization: string, clnId?: string, conId?: string, options?: any): AxiosPromise<GetEmlRvrOut>;
    getClnEmlRvrList(authorization: string, addr?: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtCd?: string, options?: any): AxiosPromise<Array<GetClnEmlRvrOut>>;
    getClnRvrPaging(authorization: string, input: GetClnRvrPagingIn, options?: any): AxiosPromise<Array<GetEmlRvrOut>>;
    getCusEmlRvrList(authorization: string, cusId?: string, cusName?: string, email?: string, options?: any): AxiosPromise<Array<GetCusEmlRvrOut>>;
    getCusRvrPaging(authorization: string, input: GetCusRvrPagingIn, options?: any): AxiosPromise<Array<GetEmlRvrOut>>;
    getDealEdmDtl(authorization: string, taskId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetDealEdmDtlOut>;
    getDealEdmReplace(authorization: string, taskId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: any): AxiosPromise<Array<string>>;
    getEdmContrDtlReplace(authorization: string, contrId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: any): AxiosPromise<string>;
    getEdmFeeReplace(authorization: string, contrId: string, feeId: string, options?: any): AxiosPromise<string>;
    getEdmTmpl(authorization: string, emailTmplId: string, options?: any): AxiosPromise<GetEmlTmplOut>;
    getEmailSendHst(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParPk?: string, rcvrParTypeCd?: string, options?: any): AxiosPromise<PagingGetEmailSendHstOut>;
    getEmlContrList(authorization: string, contrId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetDealEdmDtlOut>;
    getEmlContrPay(authorization: string, contrId: string, options?: any): AxiosPromise<Array<GetPrdContrPayOut>>;
    getEmlFailList(authorization: string, addr?: string, emailSbj?: string, emailTmplId?: string, maxFailCnt?: number, maxSendCompDy?: string, maxSendDy?: string, minFailCnt?: number, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrName?: string, senderEmail?: string, senderId?: string, seq?: number, options?: any): AxiosPromise<PagingGetEmlFailOut>;
    getEmlFeeList(authorization: string, contrId: string, feeId: string, options?: any): AxiosPromise<PagingGetFeeEdmDtlOut>;
    getEmlSendCompDtlList(authorization: string, emailTmplId: string, id: number, linkClickYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrEmail?: string, rcvrName?: string, readYn?: string, spamYn?: string, usubsYn?: string, options?: any): AxiosPromise<PagingGetEmlCompDtlListOut>;
    getEmlSendCompDtlOne(authorization: string, emailTmplId: string, id: number, options?: any): AxiosPromise<GetEmlCompDtlOut>;
    getEmlSendCompList(authorization: string, emailSbj?: string, maxSendCompDy?: string, maxSendDy?: string, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: any): AxiosPromise<PagingGetEmlCompOut>;
    getEmlSendStateDtlOne(authorization: string, emailTmplId: string, id: number, options?: any): AxiosPromise<GetEmlSendStateDtlOut>;
    getEmlSendStateList(authorization: string, emailSbj?: string, maxSendDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: any): AxiosPromise<PagingGetEmlSendStateOut>;
    getEmlTmplList(authorization: string, activeYn?: string, emailTmplName?: string, emailTmplTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: any): AxiosPromise<PagingGetEmlTmplOut>;
    getEmlTmplOne(authorization: string, tmplId?: string, options?: any): AxiosPromise<GetEmlTmplOut>;
    getGtdDtlRvrPaging(authorization: string, conId?: string, taskId?: string, options?: any): AxiosPromise<Array<GetEmlRvrOut>>;
    getGtdRvrPaging(authorization: string, input: GetGtdRvrPagingIn, options?: any): AxiosPromise<Array<GetEmlRvrOut>>;
    getOrdRcvrPaging(authorization: string, conId?: string, ordId?: string, options?: any): AxiosPromise<Array<GetEmlRvrOut>>;
    getProjDtlRvrPaging(authorization: string, conId?: string, projId?: string, options?: any): AxiosPromise<Array<GetEmlRvrOut>>;
    getSendEmlList(authorization: string, options?: any): AxiosPromise<Array<GetEmlSendListOut>>;
    getUserEmlFailList(authorization: string, rcvrEmail: string, options?: any): AxiosPromise<Array<GetUserEmlFailOut>>;
    getUsubsEmlList(authorization: string, maxUsubsDt?: string, minUsubsDt?: string, name?: string, orderBy?: string, pageNum?: number, pageSize?: number, usubsCd?: string, usubsEmail?: string, usubsName?: string, options?: any): AxiosPromise<PagingGetUsubsEmlOut>;
    getWebEmlList(authorization: string, email?: string, mbrId?: string, mbrName?: string, options?: any): AxiosPromise<Array<GetWebEmlRvrOut>>;
    getWebRvrPaging(authorization: string, input: GetWebRvrPagingIn, options?: any): AxiosPromise<Array<GetEmlRvrOut>>;
    getWrkEmlList(authorization: string, clnName?: string, taskId?: string, taskName?: string, options?: any): AxiosPromise<Array<GetGtdEmlRvrOut>>;
    patchEmlTmpl(authorization: string, emailTmplId: string, input: PatchEmlTmplIn, options?: any): AxiosPromise<GetEmlTmplOut>;
    postEmlTmpl(authorization: string, input: PostEmlTmplIn, options?: any): AxiosPromise<GetEmlTmplOut>;
};
export declare class EmailControllerApi extends BaseAPI {
    deleteEmlTmpl(authorization: string, emailTmplId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    getClnDtl(authorization: string, clnId?: string, conId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut, any>>;
    getClnEmlRvrList(authorization: string, addr?: string, bjdCd?: Array<string>, clnId?: string, clnName?: string, coMngLevCd?: string, mngExceptTgtCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetClnEmlRvrOut[], any>>;
    getClnRvrPaging(authorization: string, input: GetClnRvrPagingIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut[], any>>;
    getCusEmlRvrList(authorization: string, cusId?: string, cusName?: string, email?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetCusEmlRvrOut[], any>>;
    getCusRvrPaging(authorization: string, input: GetCusRvrPagingIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut[], any>>;
    getDealEdmDtl(authorization: string, taskId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetDealEdmDtlOut, any>>;
    getDealEdmReplace(authorization: string, taskId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string[], any>>;
    getEdmContrDtlReplace(authorization: string, contrId: string, account?: string, accountHolder?: string, bank?: string, contrPayTypeCd?: string, contrPayTypeName?: string, dpstAmt?: number, emailTmplId?: string, feeDiscount?: number, feeRate?: number, leftPayTypeCd?: string, leftPayTypeName?: string, partPayTypeCd?: Array<string>, partPayTypeName?: Array<string>, registerAddr?: string, registerNum?: string, taxAddr?: string, taxNum?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getEdmFeeReplace(authorization: string, contrId: string, feeId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    getEdmTmpl(authorization: string, emailTmplId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlTmplOut, any>>;
    getEmailSendHst(authorization: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrParPk?: string, rcvrParTypeCd?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetEmailSendHstOut, any>>;
    getEmlContrList(authorization: string, contrId: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetDealEdmDtlOut, any>>;
    getEmlContrPay(authorization: string, contrId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetPrdContrPayOut[], any>>;
    getEmlFailList(authorization: string, addr?: string, emailSbj?: string, emailTmplId?: string, maxFailCnt?: number, maxSendCompDy?: string, maxSendDy?: string, minFailCnt?: number, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrName?: string, senderEmail?: string, senderId?: string, seq?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetEmlFailOut, any>>;
    getEmlFeeList(authorization: string, contrId: string, feeId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetFeeEdmDtlOut, any>>;
    getEmlSendCompDtlList(authorization: string, emailTmplId: string, id: number, linkClickYn?: string, orderBy?: string, pageNum?: number, pageSize?: number, rcvrEmail?: string, rcvrName?: string, readYn?: string, spamYn?: string, usubsYn?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetEmlCompDtlListOut, any>>;
    getEmlSendCompDtlOne(authorization: string, emailTmplId: string, id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlCompDtlOut, any>>;
    getEmlSendCompList(authorization: string, emailSbj?: string, maxSendCompDy?: string, maxSendDy?: string, minSendCompDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetEmlCompOut, any>>;
    getEmlSendStateDtlOne(authorization: string, emailTmplId: string, id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlSendStateDtlOut, any>>;
    getEmlSendStateList(authorization: string, emailSbj?: string, maxSendDy?: string, minSendDy?: string, orderBy?: string, pageNum?: number, pageSize?: number, senderEmail?: string, senderId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetEmlSendStateOut, any>>;
    getEmlTmplList(authorization: string, activeYn?: string, emailTmplName?: string, emailTmplTypeCd?: string, orderBy?: string, pageNum?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetEmlTmplOut, any>>;
    getEmlTmplOne(authorization: string, tmplId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlTmplOut, any>>;
    getGtdDtlRvrPaging(authorization: string, conId?: string, taskId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut[], any>>;
    getGtdRvrPaging(authorization: string, input: GetGtdRvrPagingIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut[], any>>;
    getOrdRcvrPaging(authorization: string, conId?: string, ordId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut[], any>>;
    getProjDtlRvrPaging(authorization: string, conId?: string, projId?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut[], any>>;
    getSendEmlList(authorization: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlSendListOut[], any>>;
    getUserEmlFailList(authorization: string, rcvrEmail: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetUserEmlFailOut[], any>>;
    getUsubsEmlList(authorization: string, maxUsubsDt?: string, minUsubsDt?: string, name?: string, orderBy?: string, pageNum?: number, pageSize?: number, usubsCd?: string, usubsEmail?: string, usubsName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PagingGetUsubsEmlOut, any>>;
    getWebEmlList(authorization: string, email?: string, mbrId?: string, mbrName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetWebEmlRvrOut[], any>>;
    getWebRvrPaging(authorization: string, input: GetWebRvrPagingIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlRvrOut[], any>>;
    getWrkEmlList(authorization: string, clnName?: string, taskId?: string, taskName?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetGtdEmlRvrOut[], any>>;
    patchEmlTmpl(authorization: string, emailTmplId: string, input: PatchEmlTmplIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlTmplOut, any>>;
    postEmlTmpl(authorization: string, input: PostEmlTmplIn, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GetEmlTmplOut, any>>;
}
