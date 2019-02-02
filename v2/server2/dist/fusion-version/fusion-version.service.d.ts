import { Connection } from 'typeorm';
import { FusionVersion } from './fusion-version.entity';
export declare class FusionVersionService {
    private readonly connection;
    constructor(connection: Connection);
    findAll(): Promise<FusionVersion[]>;
}
