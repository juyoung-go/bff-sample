import { PrdClnPrd } from './prd-cln-prd';
export interface GetBselPrdClnOut {
    'addr'?: string;
    'bselId'?: string;
    'clnBselMngCd'?: string;
    'clnBselMngName'?: string;
    'clnId'?: string;
    'clnName'?: string;
    'conNum'?: string;
    'prdList'?: Array<PrdClnPrd>;
}
