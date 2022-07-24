import { GetAddrCommon } from './get-addr-common';
import { GetAddrJuso } from './get-addr-juso';
export interface GetAddrOut {
    'common': GetAddrCommon;
    'juso': Array<GetAddrJuso>;
}
