import { IbizaVersionsService } from './ibiza-versions.service';
export declare class IbizaResolvers {
    private readonly ibizaService;
    constructor(ibizaService: IbizaVersionsService);
    ibizaVersions(): Promise<import("./ibiza-version.entity").IbizaVersion[]>;
}
