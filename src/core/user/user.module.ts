import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma/prisma.module';
import { UserService } from '@core/user/user.service';
import { UserController } from '@core/user/user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
