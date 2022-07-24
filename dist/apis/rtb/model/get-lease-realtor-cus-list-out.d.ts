import { GetCusConListOut } from './get-cus-con-list-out';
import { GetCusEmailListOut } from './get-cus-email-list-out';
export interface GetLeaseRealtorCusListOut {
    'clnId': string;
    'con': Array<GetCusConListOut>;
    'cusId': string;
    'cusName'?: string;
    'email': Array<GetCusEmailListOut>;
    'nonuResn'?: string;
    'relType'?: string;
    'relTypeCd'?: string;
}
