import { GetPmtInfoOut } from './get-pmt-info-out';
export interface GetContrAmtOut {
    'balancePmtAmt'?: number;
    'balancePmtExpectDy'?: string;
    'contrAmt'?: number;
    'contrDy'?: string;
    'contrPmtAmt': number;
    'contrPmtExpectDy'?: string;
    'createDt'?: string;
    'createUserInfo'?: string;
    'midPmtList'?: Array<GetPmtInfoOut>;
    'updateDt'?: string;
    'updateUserInfo'?: string;
}
