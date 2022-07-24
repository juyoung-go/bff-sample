import { Geojson } from './geojson';
export interface GetSampleGeojsonOut {
    'boundary'?: Geojson;
    'center'?: Geojson;
    'managerId'?: string;
    'objectId'?: string;
    'objectType'?: string;
    'plan'?: string;
    'progress'?: string;
    'saleYn'?: string;
}
