import WwwGetBldListOut from './WwwGetBldListOut';
export default interface WwwGetBldListWithPrdTotalCntOut {
    bFirstPage?: boolean;
    bLastPage?: boolean;
    bfirstPage: boolean;
    blastPage: boolean;
    bldCnt: number;
    endRow: number;
    firstPageNum: number;
    isHasNextPage: boolean;
    isHasPreviousPage: boolean;
    lastPageNum: number;
    list: WwwGetBldListOut[];
    orderBy?: string;
    pageNum: number;
    pageSize: number;
    pages: number;
    prdCnt: number;
    startRow: number;
}
