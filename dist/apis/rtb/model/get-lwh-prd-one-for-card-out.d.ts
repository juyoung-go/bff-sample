import { GetPhtForLwhPrdSearchCardOut } from './get-pht-for-lwh-prd-search-card-out';
export interface GetLwhPrdOneForCardOut {
    'bldTitle'?: string;
    'flrInfoDispName'?: string;
    'lwhId': string;
    'lwhPrdTrStatCd'?: string;
    'phtExistYn': string;
    'prdChkErnDd'?: number;
    'prdId': string;
    'prdInfoDispName'?: string;
    'prdInfoRedcDispName': string;
    'prdPhtOut'?: Array<GetPhtForLwhPrdSearchCardOut>;
    'prsScrapYn': string;
    'publicScrapYn': string;
    'substaName'?: string;
    'substaWlkTimeMin'?: number;
}
