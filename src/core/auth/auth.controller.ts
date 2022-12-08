import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '@guards/auth/local.auth.guard';
import { Request } from 'express';
import { JwtAuthGuard } from '@guards/auth/jwt.auth.guard';
import { AuthService } from '@core/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req: Request) {
    return this.authService.generateAccessToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  info(@Req() req: Request) {
    req.user;
    return 'Hello ' + req.user.username;
  }
}
