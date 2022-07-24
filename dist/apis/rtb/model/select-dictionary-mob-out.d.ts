import { ComComCd } from './com-com-cd';
import { GetBltypTreeOut } from './get-bltyp-tree-out';
import { GetHwTreeOut } from './get-hw-tree-out';
import { GetPrmtBasicOut } from './get-prmt-basic-out';
export interface SelectDictionaryMobOut {
    'bltyps': Array<GetBltypTreeOut>;
    'codes': {
        [key: string]: Array<ComComCd>;
    };
    'hwInfos': Array<GetHwTreeOut>;
    'prmts': Array<GetPrmtBasicOut>;
    'whtyps': Array<GetBltypTreeOut>;
}
