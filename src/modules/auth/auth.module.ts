import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';

const ACCESS_TOKEN_EXPIRES_IN = '24h';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: ACCESS_TOKEN_EXPIRES_IN },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
