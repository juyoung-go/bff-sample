import { GetPhtForBldPrdSearchCardOut } from './get-pht-for-bld-prd-search-card-out';
import { GetPrdOneForCardOut } from './get-prd-one-for-card-out';
export interface GetBldOneForCardOut {
    'bldId': string;
    'bldPhtOut'?: Array<GetPhtForBldPrdSearchCardOut>;
    'bldTitle': string;
    'cmplCostrYearDispName': string;
    'exclYn': string;
    'intYn'?: string;
    'listPrd': Array<GetPrdOneForCardOut>;
    'paroYn': string;
    'prdChkErnDd'?: number;
    'prdCnt': number;
    'prdInfoRedcDispName'?: string;
    'prsScrapYn': string;
    'publicScrapYn': string;
    'shofiYn': string;
    'stdFlrNlaPyDispName': string;
    'substaName'?: string;
    'substaWlkTimeMin'?: number;
}
