import BaseController from "src/nest/dev/base/base.controller";
import { RetailService } from "../services/retail.service";
export declare class RetailController extends BaseController {
    private readonly retailService;
    constructor(retailService: RetailService);
    getProductDetail(prdId: string): Promise<string>;
}
