import { Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { FusionVersionService } from './fusion-version.service';

@Resolver('FusionVersion')
export class FusionResolvers {
  constructor(private readonly fusionService: FusionVersionService) {}

  @Query()
  async fusionVersions() {
    return await this.fusionService.findAll();
  }

//   @Query('cat')
//   async findOneById(
//     @Args('id', ParseIntPipe)
//     id: number,
//   ): Promise<Cat> {
//     return await this.catsService.findOneById(id);
//   }

//   @Mutation('createCat')
//   async create(@Args('createCatInput') args: CreateCatDto): Promise<Cat> {
//     const createdCat = await this.catsService.create(args);
//     pubSub.publish('catCreated', { catCreated: createdCat });
//     return createdCat;
//   }

//   @Subscription('catCreated')
//   catCreated() {
//     return {
//       subscribe: () => pubSub.asyncIterator('catCreated'),
//     };
//   }
}
