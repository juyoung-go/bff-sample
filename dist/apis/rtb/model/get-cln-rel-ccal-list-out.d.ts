import { GetTaskByCcalIdForCcalOut } from './get-task-by-ccal-id-for-ccal-out';
export interface GetClnRelCcalListOut {
    'asgmtDy'?: string;
    'callCnt'?: number;
    'ccalConCollectYn'?: string;
    'ccalId': string;
    'ccalTcalResCd'?: string;
    'ccalTcalResName'?: string;
    'ccalTcallTryDy'?: string;
    'clnId': string;
    'mtDueDt'?: string;
    'mtId'?: string;
    'mtStatCd'?: string;
    'mtStatName'?: string;
    'ptbId'?: string;
    'ptbName'?: string;
    'task': Array<GetTaskByCcalIdForCcalOut>;
    'taskCnt': number;
}
