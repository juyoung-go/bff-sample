import WwwGetPrdCdtDtlOut from '../models/WwwGetPrdCdtDtlOut';
import WwwPatchPrdCdtDtlIn from '../models/WwwPatchPrdCdtDtlIn';
import WwwGetLeaveMbrOut from '../models/WwwGetLeaveMbrOut';
import WwwPostLeaveMbrIn from '../models/WwwPostLeaveMbrIn';
import WwwGetMbrInfoOut from '../models/WwwGetMbrInfoOut';
import WwwPatchUserInfoIn from '../models/WwwPatchUserInfoIn';
import WwwPatchMbrStatIn from '../models/WwwPatchMbrStatIn';
import WwwPatchMobNumIn from '../models/WwwPatchMobNumIn';
import RentConditionOut from '../models/RentConditionOut';
export default class WwwMbrUserService {
    patchRentCondition(wwwPatchPrdCdtDtlIn: WwwPatchPrdCdtDtlIn): Promise<WwwGetPrdCdtDtlOut>;
    patchLeave(wwwPostLeaveMbrIn: WwwPostLeaveMbrIn): Promise<WwwGetLeaveMbrOut>;
    postConfirmEmail(): Promise<void>;
    patchInfo(wwwPatchUserInfoIn: WwwPatchUserInfoIn): Promise<WwwGetMbrInfoOut>;
    patchMbrStat(wwwPatchMbrStatIn: WwwPatchMbrStatIn): Promise<WwwGetMbrInfoOut>;
    patchSignInCnt(mbrId: string): Promise<WwwGetMbrInfoOut>;
    patchMobNum(wwwPatchMobNumIn: WwwPatchMobNumIn): Promise<WwwGetMbrInfoOut>;
    getMbrInfo(mbrId: string): Promise<WwwGetMbrInfoOut>;
    getPrdCdtDtl(mbrId: string): Promise<RentConditionOut>;
    getNoticeMessage(): Promise<void>;
    getDeals(): Promise<void>;
}
