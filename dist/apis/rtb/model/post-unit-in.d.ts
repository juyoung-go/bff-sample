import { FlrList } from './flr-list';
export interface PostUnitIn {
    'bldId'?: string;
    'useYn'?: string;
    'unitCfCd'?: string;
    'flrNum'?: number;
    'unitName'?: string;
    'flrList'?: Array<FlrList>;
    'dgUseYn'?: string;
    'dgName'?: string;
    'prdRegYn'?: string;
    'unitFaceCd'?: string;
    'unitSideCd'?: string;
    'supplyAirYn'?: string;
    'exhaustAirYn'?: string;
    'glaPy'?: number;
    'glaM2'?: number;
    'nlaPy'?: number;
    'nlaM2'?: number;
    'exclRate'?: number;
    'flrHeightM'?: number;
    'eltcKw'?: number;
    'createUserId'?: string;
    'updateUserId'?: string;
    'updateDt'?: string;
    'unisexWcCnt'?: number;
    'manWcCnt'?: number;
    'womanWcCnt'?: number;
}
