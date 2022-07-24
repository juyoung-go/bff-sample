import { GetLwhPrdOneForCardOut } from './get-lwh-prd-one-for-card-out';
import { GetPhtForLwhPrdSearchCardOut } from './get-pht-for-lwh-prd-search-card-out';
export interface GetLwhOneForCardOut {
    'bldTitle': string;
    'cmplCostrYearDispName': string;
    'exclYn': string;
    'listPrd': Array<GetLwhPrdOneForCardOut>;
    'lwhId': string;
    'lwhPhtOut'?: Array<GetPhtForLwhPrdSearchCardOut>;
    'paroYn': string;
    'prdChkErnDd'?: number;
    'prdCnt': number;
    'prdInfoRedcDispName'?: string;
    'prsScrapYn': string;
    'publicScrapYn': string;
    'stdFlrNlaPyDispName': string;
    'substaName'?: string;
    'substaWlkTimeMin'?: number;
}
