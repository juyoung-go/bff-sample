import { RetailPrdVO } from './retail-prd-vo';
import { ZoneOut } from './zone-out';
export interface GetRetailPrdOut {
    'resultList'?: Array<RetailPrdVO>;
    'zoneOut'?: ZoneOut;
}
