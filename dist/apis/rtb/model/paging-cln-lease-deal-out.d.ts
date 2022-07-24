import { GetClnLeaseDealTaskOut } from './get-cln-lease-deal-task-out';
export interface PagingClnLeaseDealOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetClnLeaseDealTaskOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'sumFeeAmt': number;
    'total': number;
}
