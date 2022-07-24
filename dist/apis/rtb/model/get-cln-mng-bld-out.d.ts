import { GetContrByBldIdForClnOut } from './get-contr-by-bld-id-for-cln-out';
import { GetExclBldInfoByBldIdAndClnIdOut } from './get-excl-bld-info-by-bld-id-and-cln-id-out';
export interface GetClnMngBldOut {
    'addr'?: string;
    'bldId': string;
    'clnBldMng'?: string;
    'clnBldMngCd'?: string;
    'contrCnt': number;
    'contrs': Array<GetContrByBldIdForClnOut>;
    'createDt'?: string;
    'createUserId'?: string;
    'createUserName'?: string;
    'exclBldCnt': number;
    'exclBldList': Array<GetExclBldInfoByBldIdAndClnIdOut>;
}
