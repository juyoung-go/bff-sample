import { Geojson } from './geojson';
export interface GetBselPrdListByIdOut {
    'addr'?: string;
    'bldName'?: string;
    'boundaryCoordinates'?: Geojson;
    'bselPrdTypeCd': string;
    'center'?: Geojson;
    'eraseYn'?: string;
    'objectId': string;
    'pnu'?: string;
    'prdBselId': string;
    'roadNameAddr'?: string;
}
