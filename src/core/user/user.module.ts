import { Module } from '@nestjs/common';
import { PrismaModule } from '@Prisma/prisma.module';
import { UserService } from '@Core/user/user.service';
import { UserController } from '@Core/user/user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
