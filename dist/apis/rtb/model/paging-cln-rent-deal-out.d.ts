import { GetClnRentDealTaskOut } from './get-cln-rent-deal-task-out';
export interface PagingClnRentDealOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetClnRentDealTaskOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'sumFeeAmt': number;
    'total': number;
}
