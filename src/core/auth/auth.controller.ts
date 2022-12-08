import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '@guards/auth/local.auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req: Request) {
    req.user;
    return 'Hello ' + req.user.username;
  }
}
