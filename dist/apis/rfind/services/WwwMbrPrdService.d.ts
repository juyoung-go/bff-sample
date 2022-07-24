import PagingMyProductOut from '../models/PagingMyProductOut';
import PostInterestTourOut from '../models/PostInterestTourOut';
import WwwPostInterestOrTourPrdIn from '../models/WwwPostInterestOrTourPrdIn';
import DeleteInterestTourOut from '../models/DeleteInterestTourOut';
import WwwDeleteInterestOrTourIn from '../models/WwwDeleteInterestOrTourIn';
import WwwGetPrdPht from '../models/WwwGetPrdPht';
import WwwGetPrdCompareOut from '../models/WwwGetPrdCompareOut';
import WwwGetPrdBasicInfo from '../models/WwwGetPrdBasicInfo';
export default class WwwMbrPrdService {
    getInterestOrTourPrds(orderBy?: string, pageSize?: number, pageNum?: number, hopeTypeCd?: string, mbrId?: string): Promise<PagingMyProductOut>;
    postInterestOrTourPrds(wwwPostInterestOrTourPrdIn: WwwPostInterestOrTourPrdIn): Promise<PostInterestTourOut>;
    deleteInterestOrTourPrd(wwwDeleteInterestOrTourIn: WwwDeleteInterestOrTourIn): Promise<DeleteInterestTourOut>;
    getRecommendPrds(orderBy?: string, pageSize?: number, pageNum?: number, mbrId?: string): Promise<PagingMyProductOut>;
    getPrdPhtList(prdId: string): Promise<WwwGetPrdPht[]>;
    getPrdsCompare(prdIds: string): Promise<WwwGetPrdCompareOut[]>;
    getPrdBasicInfo(prdId: string): Promise<WwwGetPrdBasicInfo>;
    getPrdsBasicInfo(prdIds: string[]): Promise<WwwGetPrdBasicInfo[]>;
}
