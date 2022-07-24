import { GetContrClnCusListOut } from './get-contr-cln-cus-list-out';
export interface GetAllContrClnCusListOut {
    'dealId'?: string;
    'etcClnCusInfos': Array<GetContrClnCusListOut>;
    'ldealId'?: string;
    'leaseClnCusInfos': Array<GetContrClnCusListOut>;
    'rentClnCusInfos': Array<GetContrClnCusListOut>;
}
