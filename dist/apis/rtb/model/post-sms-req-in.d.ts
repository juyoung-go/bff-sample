export interface PostSmsReqIn {
    'smsTmplId': string;
    'senderTelNum': string;
    'smsSbj': string;
    'smsCtn': string;
    'smsCtnTypeCd'?: string;
    'umsSendCfCd'?: string;
    'rcvrParPkList'?: string;
    'rcvrParTypeCdList'?: string;
    'rcvrTelNumList'?: string;
    'schedSendDt'?: string;
    'smsSendReqSeq'?: number;
    'parSeq'?: number;
    'sendCnt'?: number;
    'grpId'?: string;
    'grpYn'?: string;
    'createUserId'?: string;
}
