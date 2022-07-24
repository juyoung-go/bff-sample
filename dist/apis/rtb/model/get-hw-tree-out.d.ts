import { GetIcInfoOut } from './get-ic-info-out';
export interface GetHwTreeOut {
    'hwId': string;
    'hwName': string;
    'icInfos': Array<GetIcInfoOut>;
    'listIcInfos'?: string;
}
