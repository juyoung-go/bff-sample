import { StoreVO } from './store-vo';
export interface StandardStoreOut {
    'lat': number;
    'lng': number;
    'roadAddress': string;
    'storeList': Array<StoreVO>;
}
