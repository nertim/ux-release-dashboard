import { FusionVersionService } from './fusion-version.service';
export declare class FusionResolvers {
    private readonly fusionService;
    constructor(fusionService: FusionVersionService);
    fusionVersions(): Promise<import("./fusion-version.entity").FusionVersion[]>;
}
