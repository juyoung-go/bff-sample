import { GetClnRelCcalListOut } from './get-cln-rel-ccal-list-out';
export interface PagingClnCcalOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetClnRelCcalListOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'sumFeeAmt': number;
    'total': number;
}
