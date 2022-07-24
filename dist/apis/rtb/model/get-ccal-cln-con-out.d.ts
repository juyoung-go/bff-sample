import { GetCcalClnCusWithConOut } from './get-ccal-cln-cus-with-con-out';
import { GetCcalClnWithConOut } from './get-ccal-cln-with-con-out';
export interface GetCcalClnConOut {
    'cln': Array<GetCcalClnWithConOut>;
    'clnId': string;
    'cus': Array<GetCcalClnCusWithConOut>;
}
