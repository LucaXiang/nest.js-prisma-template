import { INestApplication } from '@nestjs/common';
import { PrismaService } from '@Prisma/prisma.service';

export async function configure(app: INestApplication) {
  // install shutdown hook
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.enableCors();
}
