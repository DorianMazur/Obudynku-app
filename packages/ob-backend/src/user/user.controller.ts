import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ChangePasswordDto } from './user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private authService: UserService) {}

  @UseGuards(AuthGuard('jwt-user'))
  @Post('password-change')
  @HttpCode(200)
  async email(@Request() req, @Body() data: ChangePasswordDto) {
    await this.authService.changePassword(req.user.id, data);
  }
}
