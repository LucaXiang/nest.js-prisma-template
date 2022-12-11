import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '@Guards/auth/local.auth.guard';
import { Request } from 'express';
import { JwtAuthGuard } from '@Guards/auth/jwt.auth.guard';
import { AuthService } from '@Core/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req: Request) {
    const access_token = await this.authService.generateAccessToken(req.user);
    return {
      access_token,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  info(@Req() req: Request) {
    return 'Hello ' + req.user.username;
  }
}
