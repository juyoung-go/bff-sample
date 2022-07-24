import MyProductOut from './MyProductOut';
export default interface PagingMyProductOut {
    bFirstPage?: boolean;
    bLastPage?: boolean;
    bfirstPage: boolean;
    blastPage: boolean;
    endRow: number;
    firstPageNum: number;
    isHasNextPage: boolean;
    isHasPreviousPage: boolean;
    lastPageNum: number;
    list: MyProductOut[];
    orderBy?: string;
    pageNum: number;
    pageSize: number;
    pages: number;
    startRow: number;
    total: number;
}
