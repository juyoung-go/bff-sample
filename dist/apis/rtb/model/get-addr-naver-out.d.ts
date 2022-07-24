import { GetAddrMeta } from './get-addr-meta';
import { GetAddrNaverJuso } from './get-addr-naver-juso';
export interface GetAddrNaverOut {
    'addresses': Array<GetAddrNaverJuso>;
    'errorMessage': string;
    'meta': GetAddrMeta;
    'status': string;
}
