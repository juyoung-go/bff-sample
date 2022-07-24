import { AddrInfo } from './addr-info';
export interface PostLwhIn {
    'lwhName'?: string;
    'mainAddr': AddrInfo;
    'relAddrList'?: Array<AddrInfo>;
    'lat'?: number;
    'lng'?: number;
    'whtypTypeCd'?: string;
    'whtypDclsIdList'?: Array<string>;
    'lowTempTypeId'?: string;
    'dangerLevTypeId'?: string;
    'roadNameAddr'?: string;
    'cityDvpDistYn'?: string;
}
