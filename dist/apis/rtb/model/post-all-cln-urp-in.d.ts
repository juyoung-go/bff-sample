import { GetAllClnListIn } from './get-all-cln-list-in';
import { UrpClnCusTgtIn } from './urp-cln-cus-tgt-in';
export interface PostAllClnUrpIn {
    'urpCd': string;
    'urpName': string;
    'clnListType': string;
    'tgtData': UrpClnCusTgtIn;
    'inData': GetAllClnListIn;
}
