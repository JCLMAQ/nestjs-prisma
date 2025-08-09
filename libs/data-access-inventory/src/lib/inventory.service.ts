import { Injectable } from '@nestjs/common';
import { PrismaClientTwo, PrismaTwo } from '@with-prisma-nest/prisma-client-two';

@Injectable()
export class InventoryService {
  constructor(private prismaService: PrismaClientTwo) {}

  async item(itemWhereUniqueInput: PrismaTwo.ItemWhereUniqueInput) {
    return this.prismaService.item.findUnique({
      where: itemWhereUniqueInput,
    });
  }

  async items(options: {
    skip?: number;
    take?: number;
    cursor?: PrismaTwo.ItemWhereUniqueInput;
    where?: PrismaTwo.ItemWhereInput;
    orderBy?: PrismaTwo.ItemOrderByWithRelationInput;
  }) {
    const { skip, take, where, cursor, orderBy } = options;
    return this.prismaService.item.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createItem(data: PrismaTwo.ItemCreateInput) {
    return this.prismaService.item.create({
      data,
    });
  }

  async updateItem(options: {
    where: PrismaTwo.ItemWhereUniqueInput;
    data: PrismaTwo.ItemUpdateInput;
  }) {
    const { where, data } = options;
    return this.prismaService.item.update({
      data,
      where,
    });
  }

  async deleteItem(where: PrismaTwo.ItemWhereUniqueInput) {
    return this.prismaService.item.delete({
      where,
    });
  }
}
