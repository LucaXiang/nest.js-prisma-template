import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  find_all() {
    return this.prismaService.user.findMany();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
