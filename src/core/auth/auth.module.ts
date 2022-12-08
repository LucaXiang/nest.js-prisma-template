import { Module } from '@nestjs/common';
import { AuthService } from '@core/auth/auth.service';
import { LocalStrategy } from '@strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '@core/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
