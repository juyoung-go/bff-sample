import { GetLmClnExclBldTaskOut } from './get-lm-cln-excl-bld-task-out';
export interface PagingGetLmClnExclBldTaskOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetLmClnExclBldTaskOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
