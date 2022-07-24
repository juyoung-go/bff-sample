import { GetAddrKkoMeta } from './get-addr-kko-meta';
import { GetKeywordKkoDocu } from './get-keyword-kko-docu';
export interface GetKeywordKkoOut {
    'documents': Array<GetKeywordKkoDocu>;
    'meta': GetAddrKkoMeta;
}
