import BaseController from 'src/nest/dev/base/base.controller';
import { VersionService } from '../services/version.service';
import { MyBody, MyBody2 } from './dto/version.dto';
import WwwMbrPublicService from 'src/apis/rfind/services/WwwMbrPublicService';
export declare class VersionController extends BaseController {
    private readonly versionService;
    private readonly wwwMbrPublicService;
    constructor(versionService: VersionService, wwwMbrPublicService: WwwMbrPublicService);
    getCoreVersion(): Promise<string>;
    getExecId(id: string): Promise<string>;
    postExec(body: MyBody2): MyBody;
}
