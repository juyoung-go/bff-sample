import { ComComCd } from './com-com-cd';
import { GetMsgBasicOut } from './get-msg-basic-out';
import { GetPrmtBasicOut } from './get-prmt-basic-out';
import { GetTermBasicOut } from './get-term-basic-out';
export interface SelectDictionaryOut {
    'codes': {
        [key: string]: Array<ComComCd>;
    };
    'msgs': Array<GetMsgBasicOut>;
    'prmts': Array<GetPrmtBasicOut>;
    'terms': Array<GetTermBasicOut>;
}
