import { GetBldOneForCardOut } from './get-bld-one-for-card-out';
import { GetPrdOneForCardOut } from './get-prd-one-for-card-out';
export interface GetScrapItemOut {
    'addr'?: string;
    'bldInfo'?: GetBldOneForCardOut;
    'bsmtYn'?: string;
    'cmplCostrYear'?: string;
    'firstFlrYn'?: string;
    'monthMtnFeeAmt': number;
    'nlaPy': number;
    'pnuId'?: string;
    'prdChkDy'?: string;
    'prdInfo'?: GetPrdOneForCardOut;
    'scrapId'?: string;
    'scrapItemTypeCd'?: string;
    'seq': number;
    'srpItemTgtRelCd'?: string;
    'stdFlrNlaPy': number;
    'tgtId'?: string;
    'unitCfCd'?: string;
    'useYn'?: string;
}
