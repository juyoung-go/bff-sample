import WwwGetPrdCompareOut from './WwwGetPrdCompareOut';
import WwwGetPrdSubOut from './WwwGetPrdSubOut';
export default interface WwwGetPrdBasicInfo {
    prdInfo?: WwwGetPrdCompareOut;
    subInfo: WwwGetPrdSubOut[];
}
