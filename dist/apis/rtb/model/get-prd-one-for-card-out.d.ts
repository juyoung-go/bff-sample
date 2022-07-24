import { GetPhtForBldPrdSearchCardOut } from './get-pht-for-bld-prd-search-card-out';
export interface GetPrdOneForCardOut {
    'bldId': string;
    'bldTitle'?: string;
    'flrInfoDispName'?: string;
    'nocInfoDispName'?: string;
    'phtExistYn': string;
    'prdChkErnDd'?: number;
    'prdId': string;
    'prdInfoDispName'?: string;
    'prdInfoRedcDispName': string;
    'prdPhtOut'?: Array<GetPhtForBldPrdSearchCardOut>;
    'prdTrStatCd'?: string;
    'prsScrapYn': string;
    'publicScrapYn': string;
    'shofiYn': string;
    'substaName'?: string;
    'substaWlkTimeMin'?: number;
}
