import { FusionVersion } from './fusion-version.entity';
export declare class GithubCommitAuthor {
    name: string;
    email: string;
    date: string;
}
export declare class GithubCommitData {
    author: GithubCommitAuthor;
    message: string;
}
export declare class GithubCommit {
    sha: string;
    commit?: GithubCommitData;
    versions: FusionVersion[];
}
