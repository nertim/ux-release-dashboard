import { Controller, Mutation, Query } from 'vesper';
import { EntityManager } from 'typeorm';
import { IbizaVersion } from '../entity/IbizaVersion';

@Controller()
export class IbizaVersionController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  versions() {
    return this.entityManager.find(IbizaVersion);
  }
}
