import { GetMbrListIn } from './get-mbr-list-in';
export interface PostMbrUrpIn {
    'urpCd'?: string;
    'urpName'?: string;
    'state'?: string;
    'inData': GetMbrListIn;
}
