import { GetAddrKkoJuso } from './get-addr-kko-juso';
import { GetRoadAddrKkoJuso } from './get-road-addr-kko-juso';
export interface GetAddrKkoDocu {
    'address'?: GetAddrKkoJuso;
    'addressName': string;
    'addressType': string;
    'newPnuId'?: string;
    'roadAddress'?: GetRoadAddrKkoJuso;
    'x'?: string;
    'y'?: string;
}
