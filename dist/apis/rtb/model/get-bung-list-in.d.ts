export interface GetBungListIn {
    'taskName'?: string;
    'clnName'?: string;
    'regnCtn'?: string;
    'purpsCtn'?: string;
    'statCd'?: Array<string>;
    'actvnsCd'?: Array<string>;
    'bungTgtCd'?: Array<string>;
    'ptb'?: Array<string>;
    'minBungAmt'?: number;
    'maxBungAmt'?: number;
    'minPlaPy'?: number;
    'maxPlaPy'?: number;
    'minGraPy'?: number;
    'maxGraPy'?: number;
    'minBlaPy'?: number;
    'maxBlaPy'?: number;
    'minNlaPy'?: number;
    'maxNlaPy'?: number;
    'tipCtn'?: string;
    'serviceCd'?: string;
    'pageNum'?: number;
    'pageSize'?: number;
    'orderBy'?: string;
}
