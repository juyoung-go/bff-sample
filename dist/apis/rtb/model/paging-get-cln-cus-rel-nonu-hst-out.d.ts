import { GetClnCusRelNonuHstOut } from './get-cln-cus-rel-nonu-hst-out';
export interface PagingGetClnCusRelNonuHstOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetClnCusRelNonuHstOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
