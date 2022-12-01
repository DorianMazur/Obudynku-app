import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RateLimiterModule } from 'nestjs-rate-limiter';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthEntity } from './auth.entity';
import { AuthService } from './auth.service';
import {
  JwtPhoneStrategy,
  JwtEmailStrategy,
  JwtUserStrategy,
} from './jwt.strategy';

@Module({
  imports: [
    HttpModule,
    RateLimiterModule.register({
      errorMessage: 'Przekroczono limit zapytań',
      duration: 60,
    }),
    TypeOrmModule.forFeature([AuthEntity]),
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: 'obudynku-secret-key!',
      signOptions: {
        expiresIn: '1h',
        issuer: 'https://obudynku.pl',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtEmailStrategy, JwtPhoneStrategy, JwtUserStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
