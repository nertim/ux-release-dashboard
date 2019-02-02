import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { FusionVersion } from './fusion-version.entity';
@Injectable()
export class FusionVersionService {
    constructor(
        private readonly connection: Connection,
      ) {}
    async findAll(): Promise<FusionVersion[]> {
      return this.connection.manager.find(FusionVersion);
    }

}
