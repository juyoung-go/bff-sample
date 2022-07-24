import { GetGtdStatOut } from './get-gtd-stat-out';
export interface GetStatusOut {
    'lease'?: GetGtdStatOut;
    'ord'?: GetGtdStatOut;
    'rent'?: GetGtdStatOut;
}
