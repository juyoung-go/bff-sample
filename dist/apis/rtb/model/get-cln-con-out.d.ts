import { GetClnConTipOut } from './get-cln-con-tip-out';
export interface GetClnConOut {
    'conId': string;
    'conNum'?: string;
    'conType': string;
    'conTypeCd': string;
    'email'?: string;
    'lastCallDt'?: string;
    'lastCallUserDeptName'?: string;
    'lastCallUserName'?: string;
    'linkDy'?: string;
    'mainConYn': string;
    'tipCnt': number;
    'tips': Array<GetClnConTipOut>;
}
