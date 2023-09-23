import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Delete,
  Param,
  HttpCode,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AddNewOpinionDTO, EditOpinionDTO } from './opinion.dto';
import { OpinionService } from './opinion.service';

@Controller('opinion')
export class OpinionController {
  constructor(private opinionService: OpinionService) {}

  @UseGuards(AuthGuard('jwt-user'))
  @Get('my')
  async getUserOpinions(@Request() req) {
    return this.opinionService.getUserOpinions(req.user.id);
  }

  @UseGuards(AuthGuard('jwt-user'))
  @Get(':id')
  async getUserOpinion(@Request() req, @Param('id') id) {
    return this.opinionService.getUserOpinion(req.user.id, id);
  }

  @Get('statistics')
  async getOpinionStatistics() {
    return this.opinionService.getOpinionStatistics();
  }

  @UseGuards(AuthGuard('jwt-user'))
  @Post('new')
  async addNewOpinion(@Request() req, @Body() data: AddNewOpinionDTO) {
    const res = await this.opinionService.addNewOpinion(data, req.user.id);
    return res;
  }

  @UseGuards(AuthGuard('jwt-user'))
  @Post(':id')
  async editOpinion(
    @Request() req,
    @Body() data: EditOpinionDTO,
    @Param('id') id,
  ) {
    const res = await this.opinionService.editOpinion(data, req.user.id, id);
    return res;
  }

  @UseGuards(AuthGuard('jwt-user'))
  @Delete(':id')
  @HttpCode(200)
  async deleteOpinion(@Request() req, @Param('id') id) {
    await this.opinionService.deleteOpinion(id, req.user.id);
  }
}
