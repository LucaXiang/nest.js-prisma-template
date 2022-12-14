import { Injectable } from '@nestjs/common';
import { PrismaService } from '@Prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async findOneWithUsername(username: string) {
    return this.prismaService.user.findFirst({
      where: {
        username,
      },
    });
  }
}
