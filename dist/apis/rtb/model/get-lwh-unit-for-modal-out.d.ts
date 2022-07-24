import { GetUnitMvinClnOut } from './get-unit-mvin-cln-out';
export interface GetLwhUnitForModalOut {
    'dgName'?: string;
    'dgUseYn'?: string;
    'flrNum': number;
    'lwhId': string;
    'mvinClnList': Array<GetUnitMvinClnOut>;
    'unitCfCd': string;
    'unitCfName': string;
    'unitDispName': string;
    'unitLwhId': string;
    'unitName'?: string;
}
