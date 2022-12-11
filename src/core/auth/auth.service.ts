import { Injectable } from '@nestjs/common';
import { UserPayload } from '@Core/auth/types/user.payload';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@Core/user/user.service';
import { compare } from '@Utils/hash';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string): Promise<UserPayload> {
    let payload: UserPayload = null;
    do {
      if (username == 'admin' && password == process.env.ADMIN_PASSWORD) {
        payload = {
          username: 'admin',
          role: 'admin',
        };
        break;
      }
      const user = await this.userService.findOneWithUsername(username);
      if (user != null) {
        if (compare(password, user.password)) {
          payload = {
            username,
            role: user.role,
          };
        }
        break;
      }
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
