import { GetRcvrInfoOut } from './get-rcvr-info-out';
export interface GetMtEmailCtnOut {
    'emailSbj': string;
    'rcvrEmailCnt'?: number;
    'rcvrInfo': Array<GetRcvrInfoOut>;
    'sendCtn': string;
}
