import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingController } from './building.controller';
import { BuildingEntity } from './building.entity';
import { BuildingService } from './building.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([BuildingEntity])],
  controllers: [BuildingController],
  providers: [BuildingService],
  exports: [BuildingService],
})
export class BuildingModule {}
