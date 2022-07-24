export interface SaveSsptIn {
    'taskName'?: string;
    'reqUserId'?: string;
    'ssptWorkCfCd'?: string;
    'ssptTaskTypeCd'?: Array<string>;
    'ssptRegnCds'?: Array<string>;
    'reqCtn'?: string;
    'expireDy'?: string;
    'minNlaPy'?: number;
    'maxNlaPy'?: number;
}
