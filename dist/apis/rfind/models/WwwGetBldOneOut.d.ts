import WwwGetPrdBldOut from './WwwGetPrdBldOut';
import WwwGetPrdOfficeOut from './WwwGetPrdOfficeOut';
import WwwGetAllBldPhtOut from './WwwGetAllBldPhtOut';
import WwwGetPrdSubOut from './WwwGetPrdSubOut';
export default interface WwwGetBldOneOut {
    bldInfo: WwwGetPrdBldOut;
    office: WwwGetPrdOfficeOut[];
    pht: WwwGetAllBldPhtOut[];
    subways: WwwGetPrdSubOut[];
}
