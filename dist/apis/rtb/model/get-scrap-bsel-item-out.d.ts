import { GetPhtForBldPrdSearchCardOut } from './get-pht-for-bld-prd-search-card-out';
export interface GetScrapBselItemOut {
    'addrS': string;
    'bldId'?: string;
    'bldName': string;
    'bldPhtOut'?: Array<GetPhtForBldPrdSearchCardOut>;
    'bselPrdTypeName': string;
    'bsmtCnt': number;
    'flrCnt': number;
    'graPy': string;
    'maxDsrdSlgPrc': number;
    'mtnFeeAmt': number;
    'plaPy': string;
    'prdBselId': string;
    'progsStatName': string;
    'rentAmt': number;
    'scrapId'?: string;
    'seq': number;
}
