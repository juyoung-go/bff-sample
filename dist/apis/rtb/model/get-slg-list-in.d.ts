export interface GetSlgListIn {
    'taskName'?: string;
    'clnName'?: string;
    'statCd'?: Array<string>;
    'ptb'?: Array<string>;
    'minSlgPrc'?: number;
    'maxSlgPrc'?: number;
    'minPlaPy'?: number;
    'maxPlaPy'?: number;
    'minGraPy'?: number;
    'maxGraPy'?: number;
    'minBlaPy'?: number;
    'maxBlaPy'?: number;
    'minPlaPerPy'?: number;
    'maxPlaPerPy'?: number;
    'minGraPerPy'?: number;
    'maxGraPerPy'?: number;
    'minExpectRoiRate'?: number;
    'maxExpectRoiRate'?: number;
    'pageNum'?: number;
    'pageSize'?: number;
    'orderBy'?: string;
}
