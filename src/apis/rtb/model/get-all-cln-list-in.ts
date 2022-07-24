/* tslint:disable */
/* eslint-disable */
/**
 * Rsquare Manage Server
 * Api Document
 *
 * The version of the OpenAPI document: V22.20.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface GetAllClnListIn
 */
export interface GetAllClnListIn {
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnName'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'bjdCd'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnAddr'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'mktMngCd'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnMngDeptCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'coTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'wplcTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'brcHasYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'openStatCd'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'minOnlaPy'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'maxOnlaPy'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'grpName'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minClnAddrChkDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxClnAddrChkDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minRctCallSuccDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxRctCallSuccDy'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'maxEsaPy'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'minEsaPy'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minExpectMoveDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxExpectMoveDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'expectMoveDyHasYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'mngExceptTgtYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'mngExceptTgtCd'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'coMngLevCd'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnLwhMngLevCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnLwhMngCfCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnBselMngLevCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'clnBselMngCfCd'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'clnRetailMngLevCdList'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'industryLargeCd'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'industryMiddleCdList'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'minRetailEsaPy'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'maxRetailEsaPy'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'mktTeamMngYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'finnTeamMngYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'corpSalTeamMngYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'lmTeamMngYn'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'mktMngPtbId'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'lmMngPtbId'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'bselMngPtbId'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'intMngPtbId'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'furMngPtbId'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'afltMngPtbId'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'lwhMngPtbId'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'ksicCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'tipYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minTipRegDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxTipRegDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minTaskRegDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxTaskRegDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minRctLmClnTaskDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxRctLmClnTaskDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'cusRelYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'mptbUserYn'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'contrTypeList'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minContrEndDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxContrEndDy'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'ongoingRentDealTypeList'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'ongoingLeaseDealTypeList'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'ordInProgsYn'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'minTotalOrdCnt'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'maxTotalOrdCnt'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'minTotalSalesAmt'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'maxTotalSalesAmt'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minRctDlvrDy'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxRctDlvrDy'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'ownMngBldLevCd'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'ownMngBldTypeCd'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'bldMngPtbId'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'expNdsCd'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllClnListIn
     */
    'bselBjdCd'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'mngBldYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'minCreateDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'maxCreateDt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'allYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'salYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'furYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'lmYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'projYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'salDeptYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'lmDeptYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'intDeptYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'furDeptYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'lwhDeptYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'afltDeptYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'bselDeptYn'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'retailDeptYn'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'pageNum'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllClnListIn
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllClnListIn
     */
    'orderBy'?: string;
}

