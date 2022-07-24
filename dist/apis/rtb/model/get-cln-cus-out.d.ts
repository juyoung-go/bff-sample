import { GetClnCusWithConOut } from './get-cln-cus-with-con-out';
export interface GetClnCusOut {
    'bselCnt': number;
    'clnId': string;
    'cus': Array<GetClnCusWithConOut>;
    'furCnt': number;
    'intCnt': number;
    'leaseCnt': number;
    'lwhLeaseCnt': number;
    'lwhRentCnt': number;
    'rentCnt': number;
    'retailLeaseCnt': number;
    'retailRentCnt': number;
    'totalCnt': number;
}
