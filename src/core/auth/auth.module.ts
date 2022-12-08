import { Module } from '@nestjs/common';
import { AuthService } from '@core/auth/auth.service';
import { LocalStrategy } from '@strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '@core/auth/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '@strategies/jwt.strategy';

@Module({
  imports: [PassportModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, JwtService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
