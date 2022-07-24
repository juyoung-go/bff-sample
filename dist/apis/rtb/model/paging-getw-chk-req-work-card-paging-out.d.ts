import { GetwChkReqWorkCardPagingOut } from './getw-chk-req-work-card-paging-out';
export interface PagingGetwChkReqWorkCardPagingOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetwChkReqWorkCardPagingOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
