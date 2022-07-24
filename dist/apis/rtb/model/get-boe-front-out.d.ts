import { CoordOut } from './coord-out';
export interface GetBoeFrontOut {
    'bldBoeTypeCd': string;
    'bldBoeTypeName': string;
    'boeGeom': string;
    'boeId': string;
    'boePathList'?: Array<Array<CoordOut>>;
    'createDt'?: string;
    'createUserName': string;
    'expl': string;
    'seq': number;
    'updateDt'?: string;
    'updateUserName'?: string;
    'useYn': string;
}
