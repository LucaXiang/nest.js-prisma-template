import { Injectable } from '@nestjs/common';
import { UserPayload } from '@Core/auth/types/user.payload';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@Core/user/user.service';
import { compare } from '@Utils/hash';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @InjectRedis() private readonly redisService: Redis,
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

  async generateAccessToken(payload: UserPayload): Promise<string> {
    const access_token: string = this.jwtService.sign(payload);
    // storage access_token to redis
    await this.redisService.set(payload.username, access_token);
    return access_token;
  }

  async validateAccessToken(
    payload: UserPayload,
    jwt: string,
  ): Promise<boolean> {
    const newestToken = await this.redisService.get(payload.username);
    return newestToken == jwt;
  }
}
