export interface GetRentListIn {
    'taskName'?: string;
    'taskId'?: string;
    'clnId'?: string;
    'clnName'?: string;
    'firRentExpectLocalCd'?: string;
    'secRentExpectLocalCd'?: string;
    'dealMoveResnCd'?: string;
    'minOnlaPy'?: number;
    'maxOnlaPy'?: number;
    'nlaPy'?: number;
    'minRentTaskRegDy'?: string;
    'maxRentTaskRegDy'?: string;
    'minRentCmplDy'?: string;
    'maxRentCmplDy'?: string;
    'minTipRegDy'?: string;
    'maxTipRegDy'?: string;
    'minTodoDy'?: string;
    'maxTodoDy'?: string;
    'statCd'?: Array<string>;
    'failResnCd'?: string;
    'ptb'?: Array<string>;
    'mktDealYn'?: string;
    'bjdCd'?: Array<string>;
    'pageNum'?: number;
    'pageSize'?: number;
    'orderBy'?: string;
}
