import { PatchClnMngTeamIn } from './patch-cln-mng-team-in';
export interface SaveClnIn {
    'clnTypeCd'?: string;
    'clnName'?: string;
    'clnAliasName'?: string;
    'wplcTypeCd'?: string;
    'clnEngName'?: string;
    'brcName'?: string;
    'ceoName'?: string;
    'estDy'?: string;
    'bizRegistNum'?: string;
    'corpRegistNum'?: string;
    'coTypeCd'?: string;
    'brcHasYn'?: string;
    'openStatCd'?: string;
    'emplCnt'?: number;
    'grpName'?: string;
    'addrDtl'?: string;
    'ksicCd'?: string;
    'onlaPy'?: number;
    'webAddr'?: string;
    'coExpl'?: string;
    'clnInflRoutCd'?: string;
    'lwhMktMngYn'?: string;
    'ovrseMktMngYn'?: string;
    'mngTeamInfo': PatchClnMngTeamIn;
}
