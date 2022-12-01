import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingModule } from '../building/building.module';
import { OpinionController } from './opinion.controller';
import { OpinionEntity } from './opinion.entity';
import { OpinionService } from './opinion.service';

@Module({
  imports: [TypeOrmModule.forFeature([OpinionEntity]), BuildingModule],
  controllers: [OpinionController],
  providers: [OpinionService],
  exports: [],
})
export class OpinionModule {}
