import { Module } from '@nestjs/common';
import { AuthService } from '@core/auth/auth.service';
import { LocalStrategy } from '@strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '@core/auth/auth.controller';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
