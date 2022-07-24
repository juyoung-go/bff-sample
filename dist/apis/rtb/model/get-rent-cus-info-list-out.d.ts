import { GetCusConListOut } from './get-cus-con-list-out';
import { GetCusEmailListOut } from './get-cus-email-list-out';
import { GetWebMemInfoListOut } from './get-web-mem-info-list-out';
export interface GetRentCusInfoListOut {
    'clnId': string;
    'con': Array<GetCusConListOut>;
    'cusId': string;
    'cusName'?: string;
    'dealRelType'?: string;
    'email': Array<GetCusEmailListOut>;
    'nonuResn'?: string;
    'relTypeCd'?: string;
    'webMemberInfo': Array<GetWebMemInfoListOut>;
}
