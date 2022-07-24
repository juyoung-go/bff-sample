export interface PostEmlSendReqHst {
    'senderEmail': string;
    'emailSbj': string;
    'emailTmplId'?: string;
    'sendCtn'?: string;
    'umsSendCfCd': string;
    'rcvrEmailList'?: Array<string>;
    'rcvrParTypeCdList'?: Array<string>;
    'rcvrParPkList'?: Array<string>;
    'rcvrNameList'?: Array<string>;
    'rcvrIdList'?: Array<string>;
    'rcvrEmailCnt'?: number;
    'resrvSendDt'?: string;
    'umsProcStatCd'?: string;
    'umsSendResCd'?: string;
    'sendUserId'?: string;
    'grpYn'?: string;
    'urpId'?: string;
    'urpCd'?: string;
    'mbrId'?: string;
    'sendAtOnceYn'?: string;
}
