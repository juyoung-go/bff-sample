import { GetContrCusInfoListOut } from './get-contr-cus-info-list-out';
export interface GetContrClnCusListOut {
    'addr'?: string;
    'bizRegistNum'?: string;
    'bldName'?: string;
    'ceoName'?: string;
    'clnId': string;
    'clnName'?: string;
    'contrClnRelType'?: string;
    'contrClnRelTypeCd'?: string;
    'contrId': string;
    'cusInfo': Array<GetContrCusInfoListOut>;
    'rltOcoYn'?: string;
}
