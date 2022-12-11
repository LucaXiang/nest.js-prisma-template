import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserPayload } from '@Core/auth/types/user.payload';
import { Request } from 'express';
import { AuthService } from '@Core/auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
    });
  }

  // noinspection JSUnusedGlobalSymbols
  public async validate(req: Request, payload: UserPayload) {
    const jwt = req.get('Authorization').replace('Bearer', '').trim();
    return (await this.authService.validateAccessToken(payload, jwt))
      ? payload
      : null;
  }
}
