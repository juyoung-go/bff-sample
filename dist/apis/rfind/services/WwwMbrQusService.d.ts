import WwwAsIsPagingWwwGetAsIsQusOut from '../models/WwwAsIsPagingWwwGetAsIsQusOut';
import WwwGetQusProcHstOut from '../models/WwwGetQusProcHstOut';
export default class WwwMbrQusService {
    getWwwQusPaging(orderBy?: string, pageSize?: number, pageNum?: number, mbrId?: string): Promise<WwwAsIsPagingWwwGetAsIsQusOut>;
    getWwwQusProcStat(qusId: string): Promise<WwwGetQusProcHstOut[]>;
}
