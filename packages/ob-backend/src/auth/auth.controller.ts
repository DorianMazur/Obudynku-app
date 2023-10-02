import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RateLimit, RateLimiterGuard } from 'nestjs-rate-limiter';
import {
  GenerateEmailCodeDTO,
  VerifyEmailCodeDTO,
  FinishRegistrationDTO,
  LoginDTO,
} from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(RateLimiterGuard)
  @RateLimit({
    keyPrefix: 'login',
    points: 10,
  })
  @Post('login')
  async login(@Body() data: LoginDTO) {
    const res = await this.authService.login(data.email, data.password);
    if (!res || !res.token) {
      throw new HttpException('Błędny email lub hasło', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Post('register/email')
  async email(@Body() data: GenerateEmailCodeDTO) {
    const res = await this.authService.generateEmailCode(data.email);
    if (!res) {
      throw new HttpException(
        'Error during sending a email',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('register/email/verify')
  async emaiVerify(@Body() data: VerifyEmailCodeDTO) {
    const res = await this.authService.verifyEmailCode(data.code, data.email);
    if (!res || !res.token) {
      throw new HttpException('Niepoprawny kod', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @UseGuards(AuthGuard('jwt-email'))
  @Post('register/finish')
  async finishRegistration(
    @Request() req,
    @Body() data: FinishRegistrationDTO,
  ) {
    const res = await this.authService.finishUserRegistration(
      req.user.email,
      data.password,
    );
    return res;
  }
}
