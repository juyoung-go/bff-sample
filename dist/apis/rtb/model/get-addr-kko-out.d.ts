import { GetAddrKkoDocu } from './get-addr-kko-docu';
import { GetAddrKkoMeta } from './get-addr-kko-meta';
export interface GetAddrKkoOut {
    'documents': Array<GetAddrKkoDocu>;
    'meta': GetAddrKkoMeta;
}
