import { GetContrByWorkIdForClnOut } from './get-contr-by-work-id-for-cln-out';
export interface GetClnLeaseDealTaskOut {
    'bldId'?: string;
    'cmplDt'?: string;
    'contrCnt': number;
    'contrs': Array<GetContrByWorkIdForClnOut>;
    'dealClnRel'?: string;
    'dealStat'?: string;
    'dealStatCd'?: string;
    'mptbUserName'?: string;
    'taskId': string;
    'taskName'?: string;
    'taskRegDy'?: string;
}
