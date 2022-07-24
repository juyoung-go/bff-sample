import { GnbMenuWrap } from './gnb-menu-wrap';
import { GnbScreenUrl } from './gnb-screen-url';
import { GnbScreenWrap } from './gnb-screen-wrap';
export interface GetGnbOut {
    'listMenus': Array<GnbMenuWrap>;
    'listScreen': Array<GnbScreenWrap>;
    'listScreenUrl': Array<GnbScreenUrl>;
}
