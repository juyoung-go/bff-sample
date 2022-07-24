import { GetLmClnMngBldForExclBldModalOut } from './get-lm-cln-mng-bld-for-excl-bld-modal-out';
export interface PagingGetLmClnMngBldForExclBldModalOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetLmClnMngBldForExclBldModalOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
