import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { configure } from './app.config';
import { AppModule } from './app/app.module';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const app_host = process.env.APP_HOST;
  const app_port = process.env.APP_PORT;
  await configure(app);
  await app.listen(app_port, app_host);
  console.log(`Application start listening on http://${app_host}:${app_port}`);
})();
