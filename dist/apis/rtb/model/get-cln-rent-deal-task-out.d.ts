import { GetContrByWorkIdForClnOut } from './get-contr-by-work-id-for-cln-out';
export interface GetClnRentDealTaskOut {
    'cmplDt'?: string;
    'contrCnt': number;
    'contrs': Array<GetContrByWorkIdForClnOut>;
    'dealClnRel'?: string;
    'dealStat'?: string;
    'expireDy'?: string;
    'mptbUserName'?: string;
    'taskId': string;
    'taskName': string;
    'taskRegDy'?: string;
    'workId': string;
}
