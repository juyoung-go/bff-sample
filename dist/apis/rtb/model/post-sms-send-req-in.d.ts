export interface PostSmsSendReqIn {
    'smsTmplId': string;
    'smsSendReqSeq'?: number;
    'smsSbj'?: string;
    'sendCtn'?: string;
    'senderTelNum'?: string;
    'sendCtnByte'?: number;
    'resrvSendDt'?: string;
    'rcvrTelNumList'?: string;
    'rcvrParTypeCdList'?: string;
    'rcvrPkList'?: string;
    'umsSendCfCd'?: string;
    'sendCnt'?: number;
    'grpId'?: string;
    'grpYn'?: string;
    'createUserId'?: string;
    'parSeq'?: number;
}
