import { DevOpsData } from './devops-data.entity';
import { GithubCommit } from './github-commits.entity';
export declare class FusionVersion {
    id: number;
    createdAt: string;
    name: string;
    version: string;
    prod: boolean;
    devOpsData?: DevOpsData;
    lastVersion?: string;
    githubCommitData?: GithubCommit[];
}
