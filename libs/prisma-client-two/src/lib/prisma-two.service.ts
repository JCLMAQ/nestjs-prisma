import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@with-prisma-nest/prisma-schema-two';

@Injectable()
export class PrismaClientTwo extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this['$connect']();
  }
}
