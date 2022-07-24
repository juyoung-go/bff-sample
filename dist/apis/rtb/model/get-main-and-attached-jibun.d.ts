import { Geojson } from './geojson';
export interface GetMainAndAttachedJibun {
    'address'?: string;
    'boundaryCoordinates'?: Geojson;
    'bunji'?: string;
    'clicked'?: boolean;
    'dongcode'?: string;
    'mainBunji'?: boolean;
    'pnu'?: string;
}
