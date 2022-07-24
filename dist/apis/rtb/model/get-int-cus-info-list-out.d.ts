import { GetCusConListOut } from './get-cus-con-list-out';
import { GetCusEmailListOut } from './get-cus-email-list-out';
export interface GetIntCusInfoListOut {
    'bselInChrgYn': string;
    'clnCusRelType'?: string;
    'clnCusRelTypeCd'?: string;
    'con': Array<GetCusConListOut>;
    'cusId': string;
    'cusName': string;
    'email': Array<GetCusEmailListOut>;
    'etcCtn': string;
    'furInChrgYn': string;
    'intInChrgYn': string;
    'jobType'?: string;
    'jobTypeCd'?: string;
    'leaseInChrgYn': string;
    'lwhLeaseInChrgYn': string;
    'lwhRentInChrgYn': string;
    'mptbYn': string;
    'rankType'?: string;
    'rankTypeCd'?: string;
    'rentInChrgYn': string;
    'retailLeaseInChrgYn'?: string;
    'retailRentInChrgYn'?: string;
}
