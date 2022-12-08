import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserPayload } from '@core/auth/types/user.payload';
import * as dotenv from 'dotenv';
import * as process from 'process';
dotenv.config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  // noinspection JSUnusedGlobalSymbols
  public validate(payload: UserPayload): UserPayload {
    return payload;
  }
}
