import { VersionServiceDto } from './dto/versionservice.dto';
import BaseService from 'src/nest/dev/base/base.service';
import WwwMbrPrdService from 'src/apis/rfind/services/WwwMbrPrdService';
export declare class VersionService extends BaseService {
    private readonly wwwMbrPrdService;
    constructor(wwwMbrPrdService: WwwMbrPrdService);
    getVersion(dto: VersionServiceDto): Promise<string>;
}
