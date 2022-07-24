import { GetLeaseCusInfoListOut } from './get-lease-cus-info-list-out';
export interface GetLeaseClnCusOut {
    'addr'?: string;
    'bldName'?: string;
    'clnId': string;
    'clnName'?: string;
    'cusInfo': Array<GetLeaseCusInfoListOut>;
    'ksic'?: string;
    'onla'?: number;
    'taskId': string;
}
