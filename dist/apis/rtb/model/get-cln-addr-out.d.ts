import { GetClnUnitOut } from './get-cln-unit-out';
export interface GetClnAddrOut {
    'addr': string;
    'bldId': string;
    'clnAddrChkDt'?: string;
    'clnId': string;
    'mainYn': string;
    'objTypeCd'?: string;
    'units': Array<GetClnUnitOut>;
}
