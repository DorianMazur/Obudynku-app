import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SearchBuildingsDTO } from './building.dto';
import { BuildingService } from './building.service';

@Controller('building')
export class BuildingController {
  constructor(private buildingService: BuildingService) {}

  @Get(':id')
  async getBuilding(@Param('id') id) {
    return this.buildingService.getBuilding(id);
  }

  @Post('search')
  async searchBuildings(@Body() data: SearchBuildingsDTO) {
    return this.buildingService.searchBuildings(data.city, data.search);
  }
}
