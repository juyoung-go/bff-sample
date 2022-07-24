import { CusClnRelType } from './cus-cln-rel-type';
import { CusConListType } from './cus-con-list-type';
export interface SaveCusIn {
    'cusName': string;
    'cusIntroRoutCd': string;
    'cusLessorYn': string;
    'cusRltYn': string;
    'cusClnRel'?: Array<CusClnRelType>;
    'etcCtn'?: string;
    'cusCon'?: Array<CusConListType>;
    'conId'?: string;
}
