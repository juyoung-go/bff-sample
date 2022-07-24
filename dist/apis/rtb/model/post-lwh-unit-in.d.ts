import { FlrList } from './flr-list';
export interface PostLwhUnitIn {
    'lwhId': string;
    'unitCfCd': string;
    'glaPy'?: number;
    'glaM2'?: number;
    'nlaPy'?: number;
    'nlaM2'?: number;
    'unitName'?: string;
    'flrNum'?: number;
    'bsmtYn'?: string;
    'firstFlrYn'?: string;
    'flrList'?: Array<FlrList>;
    'dgUseYn'?: string;
    'dgName'?: string;
    'prdRegYn'?: string;
    'exclRate'?: number;
    'createUserId'?: string;
    'flrHeightM'?: number;
    'flrStrKnm2'?: number;
    'flrUseTypeCd'?: string;
    'storeTypeCd'?: string;
    'convTypeCdList'?: string;
}
