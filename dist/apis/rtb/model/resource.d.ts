import { URL } from './url';
export interface Resource {
    'description'?: string;
    'file'?: any;
    'filename'?: string;
    'inputStream'?: object;
    'open'?: boolean;
    'readable'?: boolean;
    'uri'?: string;
    'url'?: URL;
}
