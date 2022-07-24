import { Geojson } from './geojson';
import { GetPhtForBldPrdSearchCardOut } from './get-pht-for-bld-prd-search-card-out';
export interface GetBselOutlineListForMapOut {
    'addr': string;
    'addrS': string;
    'blaPy': string;
    'bldId': string;
    'bldMainPurpsName': string;
    'bldName': string;
    'bldPhtOut'?: Array<GetPhtForBldPrdSearchCardOut>;
    'bsmtCnt': number;
    'center'?: Geojson;
    'conOwnType': string;
    'flrCnt': number;
    'govDocId': string;
    'graPy': string;
    'plaPy': string;
    'pnu': string;
}
