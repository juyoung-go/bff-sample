import { AddrInfo } from './addr-info';
export interface PostBldIn {
    'bldName'?: string;
    'mainAddr': AddrInfo;
    'relAddrList'?: Array<AddrInfo>;
    'lat'?: number;
    'lng'?: number;
    'bltypLclsId'?: Array<string>;
    'bltypDclsId'?: Array<string>;
    'roadNameAddr'?: string;
    'cityDvpDistYn'?: string;
    'bldId'?: string;
}
