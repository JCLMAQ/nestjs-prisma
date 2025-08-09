import { Injectable } from '@nestjs/common';
import { PrismaClientTwo, PrismaTwo } from '@with-prisma-nest/prisma-client-two';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaClientTwo) {}

  async store(storeWhereUniqueInput: PrismaTwo.StoreWhereUniqueInput) {
    return this.prisma.store.findUnique({
      where: storeWhereUniqueInput,
    });
  }

  async stores(options: {
    skip?: number;
    take?: number;
    cursor?: PrismaTwo.StoreWhereUniqueInput;
    where?: PrismaTwo.StoreWhereInput;
    orderBy?: PrismaTwo.StoreOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = options;

    return this.prisma.store.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createStore(data: PrismaTwo.StoreCreateInput) {
    return this.prisma.store.create({
      data,
    });
  }

  async updateStore(options: {
    where: PrismaTwo.StoreWhereUniqueInput;
    data: PrismaTwo.StoreUpdateInput;
  }) {
    const { where, data } = options;
    return this.prisma.store.update({
      data,
      where,
    });
  }

  async deleteStore(where: PrismaTwo.StoreWhereUniqueInput) {
    return this.prisma.store.delete({
      where,
    });
  }
}
