export interface PatchSsptIn {
    'taskId': string;
    'taskName'?: string;
    'reqUserId'?: string;
    'ssptWorkCfCd'?: string;
    'ssptTaskTypeCd'?: Array<string>;
    'ssptRegnCds'?: Array<string>;
    'minNlaPy'?: number;
    'maxNlaPy'?: number;
    'reqCtn'?: string;
    'expireDy'?: string;
}
