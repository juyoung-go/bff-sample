import { GetLmClnExclBldLeaseDealOut } from './get-lm-cln-excl-bld-lease-deal-out';
export interface PagingGetLmClnExclBldLeaseDealOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetLmClnExclBldLeaseDealOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
