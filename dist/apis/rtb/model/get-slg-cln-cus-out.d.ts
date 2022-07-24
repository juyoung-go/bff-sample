import { GetRentCusInfoListOut } from './get-rent-cus-info-list-out';
export interface GetSlgClnCusOut {
    'clnId': string;
    'clnName'?: string;
    'cusInfo': Array<GetRentCusInfoListOut>;
    'taskId': string;
}
