import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RateLimiterModule } from 'nestjs-rate-limiter';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthEntity } from './auth.entity';
import { AuthService } from './auth.service';
import { JwtEmailStrategy, JwtUserStrategy } from './jwt.strategy';

@Module({
  imports: [
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
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET_KEY,
          signOptions: {
            expiresIn: '1h',
            issuer: 'https://obudynku.pl',
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtEmailStrategy, JwtUserStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
