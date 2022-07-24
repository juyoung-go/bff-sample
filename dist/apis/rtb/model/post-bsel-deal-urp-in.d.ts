import { GetBungListIn } from './get-bung-list-in';
import { GetSlgListIn } from './get-slg-list-in';
export interface PostBselDealUrpIn {
    'urpCd'?: string;
    'urpName'?: string;
    'bungData'?: GetBungListIn;
    'slgData'?: GetSlgListIn;
}
