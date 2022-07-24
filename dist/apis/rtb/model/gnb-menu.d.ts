export interface GnbMenu {
    'catgYn': string;
    'dispSeq': number;
    'level': number;
    'menuDispName': string;
    'menuDispNameEng': string;
    'menuId': string;
    'mngInfo'?: string;
    'parMenuId'?: string;
    'roleYn'?: string;
    'screenCompName'?: string;
    'shortCutNo': string;
    'subMenus'?: Array<GnbMenu>;
    'urlPath'?: string;
}
