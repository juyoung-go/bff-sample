import { GetCusConListOut } from './get-cus-con-list-out';
import { GetCusEmailListOut } from './get-cus-email-list-out';
export interface GetContrCusInfoListOut {
    'clnId': string;
    'con': Array<GetCusConListOut>;
    'contrCusRelType'?: string;
    'contrCusRelTypeCd'?: string;
    'cusId': string;
    'cusName'?: string;
    'email': Array<GetCusEmailListOut>;
    'nonuResn'?: string;
    'taxPtbYn'?: string;
}
