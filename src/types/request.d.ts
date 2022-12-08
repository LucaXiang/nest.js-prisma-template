import { UserPayload } from '@core/auth/types/user.payload';

declare global {
  namespace Express {
    export interface User extends UserPayload {
      _phantom_data: any;
    }
  }
}
