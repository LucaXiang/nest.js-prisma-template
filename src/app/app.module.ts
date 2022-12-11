import { PrismaModule } from '@Prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@Core/auth/auth.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    RedisModule.forRoot({
      config: {
        url: process.env.REDIS_URL,
      },
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
