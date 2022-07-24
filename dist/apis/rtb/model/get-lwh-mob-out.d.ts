import { GetBldConOut } from './get-bld-con-out';
import { GetLwhDtlOut } from './get-lwh-dtl-out';
import { GetPhtForBldScreenOut } from './get-pht-for-bld-screen-out';
import { GetwChkReqWorkCardPagingOut } from './getw-chk-req-work-card-paging-out';
import { PagingGetFileOut } from './paging-get-file-out';
import { PagingGetTipOut } from './paging-get-tip-out';
import { SelectLwhPrdListForScreenOut } from './select-lwh-prd-list-for-screen-out';
export interface GetLwhMobOut {
    'getFileOut': PagingGetFileOut;
    'getLwhConOut': Array<GetBldConOut>;
    'getLwhOut': GetLwhDtlOut;
    'getPhtForLwhScreenOut': Array<GetPhtForBldScreenOut>;
    'getTipOut': PagingGetTipOut;
    'getwChkReqWorkCardPagingOut': Array<GetwChkReqWorkCardPagingOut>;
    'selectLwhPrdListForScreenOut': Array<SelectLwhPrdListForScreenOut>;
}
