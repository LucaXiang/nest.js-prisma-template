import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRedis() private readonly redisService: Redis,
  ) {}

  @Get()
  async getHello() {
    await this.redisService.set('hello', 'world');
    return this.redisService.get('hello');
  }
}
