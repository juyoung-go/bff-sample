import { GetPhtForLwhPrdSearchCardOut } from './get-pht-for-lwh-prd-search-card-out';
export interface GetLwhCardOut {
    'bsmtCnt'?: number;
    'cmplCostrYear': string;
    'flrCnt'?: number;
    'lat': number;
    'lng': number;
    'lwhId': string;
    'lwhTitle': string;
    'maintAmt': number;
    'nlaPy': number;
    'phtList': Array<GetPhtForLwhPrdSearchCardOut>;
    'prdChkDy'?: string;
    'prdChkErnDd'?: number;
    'prdCnt': number;
    'prdCntForMap': number;
    'prdLwhId': string;
    'prsScrapYn': string;
    'publicScrapYn': string;
    'rentAmt': number;
    'stdFlrGlaPy'?: number;
    'unit': string;
    'unitLwhId': string;
}
