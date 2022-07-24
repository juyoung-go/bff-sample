import { GetBldStregConListOut } from './get-bld-streg-con-list-out';
export interface GetOutLineListOut {
    'bdNm'?: string;
    'bldId'?: string;
    'bldStregConList': Array<GetBldStregConListOut>;
    'buildingName'?: string;
    'dongName'?: string;
    'floorInfo'?: string;
    'graM2'?: number;
    'lwhId'?: string;
    'mainPurpose'?: string;
    'objectId'?: string;
}
