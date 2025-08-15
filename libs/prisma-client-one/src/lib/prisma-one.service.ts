import { Injectable, OnModuleInit } from '@nestjs/common';

// import { PrismaClient } from '../../../../libs/prisma-schema-one/generated/prisma_one/client';
import { PrismaClient } from '@with-prisma-nest/prisma-schema-one';

@Injectable()
export class PrismaClientOne extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this['$connect']();
  }
}
