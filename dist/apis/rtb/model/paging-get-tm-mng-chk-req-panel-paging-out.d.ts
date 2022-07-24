import { GetTmMngChkReqPanelPagingOut } from './get-tm-mng-chk-req-panel-paging-out';
export interface PagingGetTmMngChkReqPanelPagingOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetTmMngChkReqPanelPagingOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
