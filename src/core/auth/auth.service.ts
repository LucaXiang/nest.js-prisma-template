import { Injectable } from '@nestjs/common';
import { UserPayload } from '@core/auth/types/user.payload';

@Injectable()
export class AuthService {
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
    console.log(payload);
    return payload;
  }
}
