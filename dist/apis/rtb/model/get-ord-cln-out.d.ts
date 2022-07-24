import { GetOrdCusListOut } from './get-ord-cus-list-out';
export interface GetOrdClnOut {
    'clnId': string;
    'clnName'?: string;
    'cusInfo': Array<GetOrdCusListOut>;
    'ksic'?: string;
    'mainAddr'?: string;
    'ordId': string;
}
