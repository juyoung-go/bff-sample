import { GetPrdUpdateIn } from './get-prd-update-in';
export interface PatchIclWorkTaskStatIn {
    'workId': string;
    'taskId': string;
    'workCfCd': string;
    'taskCfCd': string;
    'bldId': string;
    'iclTaskStatCd': string;
    'updateDt'?: string;
    'updateUserId'?: string;
    'iclConFailResnCd'?: string;
    'prdPhtgFailCorrCd'?: string;
    'dtlCtn'?: string;
    'prdList'?: Array<GetPrdUpdateIn>;
}
