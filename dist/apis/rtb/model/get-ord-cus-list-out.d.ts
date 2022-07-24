import { GetCusConListOut } from './get-cus-con-list-out';
import { GetCusEmailListOut } from './get-cus-email-list-out';
export interface GetOrdCusListOut {
    'clnId': string;
    'con': Array<GetCusConListOut>;
    'cusId': string;
    'cusName'?: string;
    'email': Array<GetCusEmailListOut>;
    'relType'?: string;
    'relTypeCd'?: string;
    'taxPtbYn'?: string;
}
