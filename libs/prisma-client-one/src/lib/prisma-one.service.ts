import { Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '../../../../libs/prisma-schema-one/generated/prisma_one/client';

@Injectable()
export class PrismaClientOne extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this['$connect']();
  }
}
