export { Prisma as PrismaOne } from '../../prisma-schema-one/generated/prisma_one/client'; // Exporting types from Prisma Client
export { PostModel as Post } from '../../prisma-schema-one/generated/prisma_one/models/Post'; // Exporting Post model type
export { UserModel as User } from '../../prisma-schema-one/generated/prisma_one/models/User'; // Exporting User model type
export * from './lib/prisma-client-one.module';
export * from './lib/prisma-one.service';

