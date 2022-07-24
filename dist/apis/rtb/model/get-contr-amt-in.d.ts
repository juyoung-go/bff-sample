import { GetPmtInfoOut } from './get-pmt-info-out';
export interface GetContrAmtIn {
    'contrDy'?: string;
    'contrAmt'?: number;
    'contrPmtExpectDy'?: string;
    'contrPmtAmt'?: number;
    'midPmtList'?: Array<GetPmtInfoOut>;
    'balancePmtExpectDy'?: string;
    'balancePmtAmt'?: number;
}
