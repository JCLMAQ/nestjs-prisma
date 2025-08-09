import { Injectable } from '@nestjs/common';
import {
  PrismaClientOne,
  PrismaOne,
} from '../../../prisma-client-one/src/index';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClientOne) {}



  async user(userWhereUniqueInput: PrismaOne.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(options: {
    skip?: number;
    take?: number;
    cursor?: PrismaOne.UserWhereUniqueInput;
    where?: PrismaOne.UserWhereInput;
    orderBy?: PrismaOne.UserOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = options;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: PrismaOne.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(options: {
    where: PrismaOne.UserWhereUniqueInput;
    data: PrismaOne.UserUpdateInput;
  }) {
    const { where, data } = options;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: PrismaOne.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}
