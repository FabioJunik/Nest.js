import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

const prisma = new PrismaService();

export { prisma };
