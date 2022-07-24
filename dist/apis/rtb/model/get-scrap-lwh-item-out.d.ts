import { GetLwhOneForCardOut } from './get-lwh-one-for-card-out';
import { GetLwhPrdOneForCardOut } from './get-lwh-prd-one-for-card-out';
export interface GetScrapLwhItemOut {
    'addr'?: string;
    'bsmtYn'?: string;
    'cmplCostrYear'?: string;
    'firstFlrYn'?: string;
    'lwhInfo'?: GetLwhOneForCardOut;
    'monthMtnFeeAmt': number;
    'nlaPy': number;
    'pnuId'?: string;
    'prdChkDy'?: string;
    'prdInfo'?: GetLwhPrdOneForCardOut;
    'scrapId'?: string;
    'scrapItemTypeCd'?: string;
    'seq': number;
    'srpItemTgtRelCd'?: string;
    'stdFlrNlaPy': number;
    'tgtId'?: string;
    'unitCfCd'?: string;
    'useYn'?: string;
}
