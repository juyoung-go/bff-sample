import { GnbMenu } from './gnb-menu';
export interface GnbMenuWrap {
    'menu': GnbMenu;
    'subMenus'?: Array<GnbMenu>;
}
