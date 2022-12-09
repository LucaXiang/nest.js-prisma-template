import { Module } from '@nestjs/common';
import { AuthService } from '@core/auth/auth.service';
import { LocalStrategy } from '@strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '@core/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@strategies/jwt.strategy';
import { UserModule } from '@core/user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
