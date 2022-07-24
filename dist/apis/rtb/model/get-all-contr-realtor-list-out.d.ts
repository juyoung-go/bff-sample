import { GetContrClnCusListOut } from './get-contr-cln-cus-list-out';
export interface GetAllContrRealtorListOut {
    'jmtYn'?: string;
    'leaseClnCusInfos': Array<GetContrClnCusListOut>;
    'rentClnCusInfos': Array<GetContrClnCusListOut>;
}
