import { GetSavingInfoListOut } from './get-saving-info-list-out';
export interface GetFeeInfoListOut {
    'clnId': string;
    'clnName'?: string;
    'contrClnRelType'?: string;
    'contrClnRelTypeCd'?: string;
    'entryAmt'?: number;
    'feeAmt'?: number;
    'feeCalcType'?: string;
    'feeCalcTypeCd'?: string;
    'feeId': string;
    'feePayWay'?: string;
    'feePayWayCd'?: string;
    'feePymtAgrmtYn'?: string;
    'feeRate'?: number;
    'focName'?: string;
    'focYn'?: string;
    'payiiCnt'?: number;
    'savingInfo': Array<GetSavingInfoListOut>;
    'sumOfSavingAmt'?: number;
    'taxinvIssStat'?: string;
    'taxinvIssStatCd'?: string;
    'vatIncld'?: string;
    'vatIncldYn'?: string;
    'vatUnIncldAmt'?: number;
    'vatUnIncldRate'?: number;
}
