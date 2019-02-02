import { Module } from '@nestjs/common';
import { FusionVersionService } from './fusion-version.service';
import { FusionResolvers } from './fusion-version.resolver';
@Module({
  providers: [FusionVersionService, FusionResolvers],
})
export class FusionVersionModule {}
