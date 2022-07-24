import { GetCusConOut } from './get-cus-con-out';
export interface GetClnCusWithConOut {
    'bselInChrgYn': string;
    'clnCusRelType'?: string;
    'clnCusRelTypeCd'?: string;
    'cons': Array<GetCusConOut>;
    'cusId': string;
    'cusName': string;
    'etcCtn': string;
    'furInChrgYn': string;
    'intInChrgYn': string;
    'jobType'?: string;
    'jobTypeCd'?: string;
    'lastSignInDt'?: string;
    'leaseInChrgYn': string;
    'linkDy'?: string;
    'lwhLeaseInChrgYn': string;
    'lwhRentInChrgYn': string;
    'mptbYn': string;
    'rankType'?: string;
    'rankTypeCd'?: string;
    'rentInChrgYn': string;
    'retailLeaseInChrgYn'?: string;
    'retailRentInChrgYn'?: string;
    'signInCnt': number;
}
