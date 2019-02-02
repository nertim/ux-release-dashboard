import { IbizaVersion } from './ibiza-version.entity';
import { Connection } from 'typeorm';
export declare class IbizaVersionsService {
    private readonly connection;
    constructor(connection: Connection);
    findAll(): Promise<IbizaVersion[]>;
}
