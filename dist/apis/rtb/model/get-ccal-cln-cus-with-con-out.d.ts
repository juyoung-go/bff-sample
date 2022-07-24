import { GetCusConOut } from './get-cus-con-out';
export interface GetCcalClnCusWithConOut {
    'bselInChrgYn': string;
    'clnCusRelType'?: string;
    'clnCusRelTypeCd'?: string;
    'conTgtType': string;
    'cons': Array<GetCusConOut>;
    'cusId': string;
    'cusName': string;
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
