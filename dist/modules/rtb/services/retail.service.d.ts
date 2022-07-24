import BaseService from "src/nest/dev/base/base.service";
import WwwMbrPublicService from "src/apis/rfind/services/WwwMbrPublicService";
export declare class RetailService extends BaseService {
    private readonly wwwMbrPublicService;
    constructor(wwwMbrPublicService: WwwMbrPublicService);
    getProductDetail(bldId: string): Promise<string>;
}
