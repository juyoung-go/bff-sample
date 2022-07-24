import { GetDataStatOut } from './get-data-stat-out';
import { GetMbrStatOut } from './get-mbr-stat-out';
import { GetObjStatOut } from './get-obj-stat-out';
import { GetStatusOut } from './get-status-out';
export interface GetStatisticOut {
    'dataStatus': GetDataStatOut;
    'gtdStatus': GetStatusOut;
    'mbrStatus': GetMbrStatOut;
    'objStatus': GetObjStatOut;
}
