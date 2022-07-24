import { Geojson } from './geojson';
export interface GetLandInfo {
    'address'?: string;
    'boundaryCoordinates'?: Geojson;
    'bunji'?: string;
    'bunjiJimok'?: string;
    'center'?: Geojson;
    'dataDate'?: string;
    'dongcode'?: string;
    'id'?: string;
    'pnu'?: string;
    'shapeId'?: string;
}
