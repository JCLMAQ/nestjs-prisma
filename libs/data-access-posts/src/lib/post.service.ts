import { Injectable } from '@nestjs/common';
import {
  Post,
  PrismaClientOne,
  PrismaOne,
} from '@with-prisma-nest/prisma-client-one';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaClientOne) {}

  async post(
    postWhereUniqueInput: PrismaOne.PostWhereUniqueInput
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: PrismaOne.PostWhereUniqueInput;
    where?: PrismaOne.PostWhereInput;
    orderBy?: PrismaOne.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPost(data: PrismaOne.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(params: {
    where: PrismaOne.PostWhereUniqueInput;
    data: PrismaOne.PostUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  async deletePost(where: PrismaOne.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({
      where,
    });
  }
}
