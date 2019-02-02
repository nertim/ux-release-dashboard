/* tslint:disable */
export class DevOpsData {
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

export class FusionVersion {
    id?: number;
    createdAt?: string;
    name?: string;
    version?: string;
    prod?: boolean;
    lastVersion?: string;
    devOpsData?: DevOpsData;
    githubCommitData?: GithubCommits[];
}

export class GithubCommitAuthor {
    name: string;
    email: string;
    date: string;
}

export class GithubCommitData {
    author: GithubCommitAuthor;
    message: string;
}

export class GithubCommits {
    sha: string;
    commit?: GithubCommitData;
}

export class IbizaVersion {
    id?: number;
    name?: string;
    version?: string;
    createdAt?: string;
}

export abstract class IQuery {
    abstract fusionVersions(name?: string): FusionVersion[] | Promise<FusionVersion[]>;

    abstract ibizaVersions(): IbizaVersion[] | Promise<IbizaVersion[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class RequestedFor {
    displayName: string;
}
