import { GetLeaseRealtorCusListOut } from './get-lease-realtor-cus-list-out';
export interface GetLeaseRealtorClnCusOut {
    'clnId': string;
    'clnName'?: string;
    'cusInfo': Array<GetLeaseRealtorCusListOut>;
    'ksic'?: string;
    'mainAddr'?: string;
    'taskId': string;
}
