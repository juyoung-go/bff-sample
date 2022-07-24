export interface PatchRntIn {
    'rntId': string;
    'rntStatCd': string;
    'rrtTypeCd': string;
    'rrtPeriodCd': string;
    'rrtJbgrpCd': string;
    'rntSbj': string;
    'etcCtn': string;
    'jobCtn': string;
    'qual': string;
    'preQual': string;
    'workCond': string;
    'rntPos'?: string;
    'dispYn'?: string;
    'rrtStartDy'?: string;
    'rrtEndDy'?: string;
    'updateDt'?: string;
    'updateUserId'?: string;
    'candtLimit'?: number;
}
