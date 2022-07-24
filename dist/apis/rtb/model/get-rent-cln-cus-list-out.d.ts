import { GetRentCusInfoListOut } from './get-rent-cus-info-list-out';
export interface GetRentClnCusListOut {
    'addr'?: string;
    'bldName'?: string;
    'clnId': string;
    'clnName'?: string;
    'cusInfo': Array<GetRentCusInfoListOut>;
    'ksic'?: string;
    'onla'?: number;
    'relType'?: string;
    'relTypeCd'?: string;
    'taskId': string;
}
