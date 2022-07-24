import { GetContrByBldIdForClnOut } from './get-contr-by-bld-id-for-cln-out';
export interface GetClnMngLwhOut {
    'addr'?: string;
    'bldId': string;
    'clnBldMng'?: string;
    'clnBldMngCd'?: string;
    'contrCnt': number;
    'contrs': Array<GetContrByBldIdForClnOut>;
    'createDt'?: string;
    'createUserId'?: string;
    'createUserName'?: string;
    'exclContrEndDy'?: string;
    'exclContrStartDy'?: string;
    'exclStat'?: string;
    'exclStatCd'?: string;
}
