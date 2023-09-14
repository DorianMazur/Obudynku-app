import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { OpinionModule } from './opinion/opinion.module';
import { BuildingModule } from './building/building.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    process.env.NODE_ENV === 'production'
      ? TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          port: process.env.MYSQL_PORT,
          username: process.env.MYSQL_USERNAME,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DATABASE,
          entities: ['dist/**/*.entity{.ts,.js}'],
        })
      : TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: ':memory:',
          dropSchema: true,
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
        }),
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    UserModule,
    AuthModule,
    HealthModule,
    OpinionModule,
    BuildingModule,
  ],
})
export class AppModule {}
