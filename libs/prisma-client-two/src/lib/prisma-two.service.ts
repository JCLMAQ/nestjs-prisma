import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../libs/prisma-schema-two/generated/prisma_two/client';

@Injectable()
export class PrismaClientTwo extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this['$connect']();
  }
}
