import { INestApplication } from '@nestjs/common';

export function configure(app: INestApplication) {
  app.enableCors();
}
