export interface GetCusPagingIn {
    'cusId'?: string;
    'clnName'?: string;
    'cusName'?: string;
    'clnRelYn'?: string;
    'mbrRelYn'?: string;
    'maxRecentChkDt'?: string;
    'minRecentChkDt'?: string;
    'maxRecentConDt'?: string;
    'minRecentConDt'?: string;
    'maxRecentLoginDt'?: string;
    'minRecentLoginDt'?: string;
    'maxSignInCnt'?: number;
    'minSignInCnt'?: number;
    'ordProgsCd'?: string;
    'clnTypeCd'?: string;
    'rltYn'?: string;
    'ongoingRentDealTypeList'?: Array<string>;
    'ongoingLeaseDealTypeList'?: Array<string>;
    'cusLessorYn'?: string;
    'pageNum'?: number;
    'pageSize'?: number;
    'orderBy'?: string;
}
