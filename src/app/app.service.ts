import { Injectable } from '@nestjs/common';
import { PrismaService } from '@Prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
