export declare class DevOpsData {
    id: number;
    buildNumber: string;
    status: string;
    result: string;
    startTime: string;
    url: string;
    sourceBranch: string;
    sourceVersion: string;
    requestedFor?: RequestedFor;
}
export declare class FusionVersion {
    id?: number;
    createdAt?: string;
    name?: string;
    version?: string;
    prod?: boolean;
    lastVersion?: string;
    devOpsData?: DevOpsData;
    githubCommitData?: GithubCommits[];
}
export declare class GithubCommitAuthor {
    name: string;
    email: string;
    date: string;
}
export declare class GithubCommitData {
    author: GithubCommitAuthor;
    message: string;
}
export declare class GithubCommits {
    sha: string;
    commit?: GithubCommitData;
}
export declare class IbizaVersion {
    id?: number;
    name?: string;
    version?: string;
    createdAt?: string;
}
export declare abstract class IQuery {
    abstract fusionVersions(name?: string): FusionVersion[] | Promise<FusionVersion[]>;
    abstract ibizaVersions(): IbizaVersion[] | Promise<IbizaVersion[]>;
    abstract temp__(): boolean | Promise<boolean>;
}
export declare class RequestedFor {
    displayName: string;
}
