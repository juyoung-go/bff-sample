import { GetContrExclBldInfo } from './get-contr-excl-bld-info';
import { GetPtbInfo } from './get-ptb-info';
export interface GetContrDefaultInfoOut {
    'exclBld'?: GetContrExclBldInfo;
    'leasePtb'?: GetPtbInfo;
    'leasePtbSet'?: Array<string>;
    'objTypeCd'?: string;
    'rentPtb'?: GetPtbInfo;
    'rentPtbSet'?: Array<string>;
    'tradeType'?: string;
}
