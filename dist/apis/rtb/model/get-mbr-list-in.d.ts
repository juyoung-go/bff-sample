export interface GetMbrListIn {
    'mbrName'?: string;
    'email'?: string;
    'coName'?: string;
    'mbrTypeCd'?: string;
    'mbrLevCd'?: string;
    'emailChkYn'?: string;
    'telChkCd'?: string;
    'linkedCusYn'?: string;
    'dealInProgsYn'?: string;
    'minSignInCnt'?: number;
    'maxSignInCnt'?: number;
    'minTktExpireDy'?: string;
    'maxTktExpireDy'?: string;
    'minLastSignInDy'?: string;
    'maxLastSignInDy'?: string;
    'minSiteJoinDy'?: string;
    'maxSiteJoinDy'?: string;
    'atvMbrYn'?: string;
    'pageNum'?: number;
    'pageSize'?: number;
    'orderBy'?: string;
}
