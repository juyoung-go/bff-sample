import { GnbScreen } from './gnb-screen';
export interface GnbScreenWrap {
    'dispScreenName': string;
    'dispScreenNameEng': string;
    'listScreen': Array<GnbScreen>;
    'screenId': string;
    'urlPath': string;
}
