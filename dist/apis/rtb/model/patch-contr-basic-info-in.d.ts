import { GetPtbInfo } from './get-ptb-info';
export interface PatchContrBasicInfoIn {
    'contrTypeCd'?: string;
    'recIncldYn'?: string;
    'contrNum'?: string;
    'dealInflCd'?: string;
    'prdId'?: string;
    'bldId'?: string;
    'bldAddr'?: string;
    'objAddr'?: string;
    'nlaPy'?: number;
    'nlaM2'?: number;
    'glaPy'?: number;
    'glaM2'?: number;
    'rentPtb'?: Array<GetPtbInfo>;
    'leasePtb'?: Array<GetPtbInfo>;
}
