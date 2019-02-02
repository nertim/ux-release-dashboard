import { Controller, Mutation, Query } from 'vesper';
import { EntityManager } from 'typeorm';
import { FusionVersion } from '../entity/FusionVersion';

@Controller()
export class FusionVersionController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  fusionVersions(args) {
    if (args.name) {
      return this.entityManager.find(FusionVersion, { where: { name: args.name } });
    }
    return this.entityManager.find(FusionVersion);
  }

  @Query()
  async latestFusionVersion(args) {
    const ret = await this.entityManager.find(FusionVersion, { order: { createdAt: 'DESC' }, take: 1, where: { name: args.name } });
    if (ret.length > 0) {
      return ret[0];
    }
    return null;
  }
}
