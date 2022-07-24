import { GetIntCusInfoListOut } from './get-int-cus-info-list-out';
export interface GetIntClnCusListOut {
    'clnId': string;
    'clnName'?: string;
    'cus': Array<GetIntCusInfoListOut>;
    'ksic'?: string;
    'mainAddr'?: string;
    'projId': string;
}
