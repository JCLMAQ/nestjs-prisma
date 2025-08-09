import { Module } from '@nestjs/common';
import { PrismaClientTwo } from './prisma-two.service';

@Module({
  controllers: [],
  providers: [PrismaClientTwo],
  exports: [PrismaClientTwo],
})
export class PrismaClientTwoModule {}
