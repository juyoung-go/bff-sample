import { GetMbrActvHstOut } from './get-mbr-actv-hst-out';
export interface PagingGetMbrActvHstOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetMbrActvHstOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
