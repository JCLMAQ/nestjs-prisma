import { Module } from '@nestjs/common';
import { PrismaClientOne } from './prisma-one.service';

@Module({
  controllers: [],
  providers: [PrismaClientOne],
  exports: [PrismaClientOne],
})
export class PrismaClientOneModule {}
