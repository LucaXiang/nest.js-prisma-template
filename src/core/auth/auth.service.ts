import { Injectable } from '@nestjs/common';
import { UserPayload } from '@core/auth/types/user.payload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  validateUser(username: string, password: string): UserPayload {
    let payload: UserPayload = null;
    do {
      console.log(username, password);
      if (username == 'admin' && password == process.env.ADMIN_PASSWORD) {
        payload = {
          username: 'admin',
          role: 'admin',
        };
        break;
      }
      // user service
    } while (false);
    return payload;
  }

  generateAccessToken(payload: UserPayload) {
    const access_token = this.jwtService.sign(payload);
    return {
      access_token,
    };
  }
}
