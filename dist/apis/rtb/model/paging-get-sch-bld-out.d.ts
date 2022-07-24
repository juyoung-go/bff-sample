import { GetSchBldOut } from './get-sch-bld-out';
export interface PagingGetSchBldOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetSchBldOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
