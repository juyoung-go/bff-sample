import { GetRentCdtDtlOut } from './get-rent-cdt-dtl-out';
export interface GetRentCdtOut {
    'bldId': string;
    'createDt'?: string;
    'createUserName'?: string;
    'fitoutMonth'?: number;
    'fitoutMtnFeeMonth'?: number;
    'flrList': Array<GetRentCdtDtlOut>;
    'ptbConNum'?: string;
    'ptbConTypeCd'?: string;
    'ptbName'?: string;
    'rentCdtSeq': number;
    'rentfreeMonth'?: number;
    'rschCoName'?: string;
    'tiDtl'?: string;
    'updateDt'?: string;
    'updateUserName'?: string;
    'useYn'?: string;
}
