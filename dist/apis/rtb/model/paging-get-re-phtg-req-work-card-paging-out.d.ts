import { GetRePhtgReqWorkCardPagingOut } from './get-re-phtg-req-work-card-paging-out';
export interface PagingGetRePhtgReqWorkCardPagingOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetRePhtgReqWorkCardPagingOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
