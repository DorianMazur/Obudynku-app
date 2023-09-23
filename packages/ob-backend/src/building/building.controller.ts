import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { SearchBuildingsDTO } from './building.dto';
import { BuildingService } from './building.service';

@Controller('building')
export class BuildingController {
  constructor(private buildingService: BuildingService) {}

  @Get(':id')
  async getBuilding(@Param('id') id) {
    return this.buildingService.getBuilding(id);
  }

  @Get(':id/image')
  @Header('content-type', 'image/jpeg')
  async getBuildingImage(@Param('id') id) {
    return this.buildingService.getBuildingImage(id);
  }

  @Get('search')
  async searchBuildings(
    @Query('page') page: number,
    @Query('city') city: string,
    @Query('address') address: string,
  ) {
    return this.buildingService.searchBuildings(page, city, address);
  }
}

export type SearchBuildings = ReturnType<BuildingService['searchBuildings']>;
export type GetBuilding = ReturnType<BuildingService['getBuilding']>;
