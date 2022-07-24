import { GetBldConOut } from './get-bld-con-out';
import { GetBldOut } from './get-bld-out';
import { GetPhtForBldScreenOut } from './get-pht-for-bld-screen-out';
import { GetwChkReqWorkCardPagingOut } from './getw-chk-req-work-card-paging-out';
import { PagingGetConClctFailResnPagingOut } from './paging-get-con-clct-fail-resn-paging-out';
import { PagingGetFileOut } from './paging-get-file-out';
import { PagingGetRePhtgReqWorkCardPagingOut } from './paging-get-re-phtg-req-work-card-paging-out';
import { PagingGetTipOut } from './paging-get-tip-out';
import { SelectBldPrdListForScreenOut } from './select-bld-prd-list-for-screen-out';
export interface GetBldMobOut {
    'getBldConOut': Array<GetBldConOut>;
    'getBldOut': GetBldOut;
    'getConClctFailResnPagingOut': PagingGetConClctFailResnPagingOut;
    'getFileOut': PagingGetFileOut;
    'getPhtForBldScreenOut': Array<GetPhtForBldScreenOut>;
    'getRePhtgReqWorkCardPagingOut': PagingGetRePhtgReqWorkCardPagingOut;
    'getTipOut': PagingGetTipOut;
    'getwChkReqWorkCardPagingOut': Array<GetwChkReqWorkCardPagingOut>;
    'selectBldPrdListForScreenOut': Array<SelectBldPrdListForScreenOut>;
}
