import { Injectable } from '@nestjs/common';
import { IbizaVersion } from './ibiza-version.entity';
import { Connection } from 'typeorm';

@Injectable()
export class IbizaVersionsService {
  constructor(private readonly connection: Connection) {}
  async findAll(): Promise<IbizaVersion[]> {
    return this.connection.manager.find(IbizaVersion);
  }
}
