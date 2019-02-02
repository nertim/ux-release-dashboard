import { FusionVersion } from './fusion-version.entity';
export declare class RequestedFor {
    displayName: string;
}
export declare class DevOpsData {
    id: number;
    buildNumber: string;
    status: string;
    result: string;
    startTime: string;
    finishTime: string;
    url: string;
    sourceBranch: string;
    sourceVersion: string;
    requestedFor: RequestedFor;
    versions: FusionVersion[];
}
