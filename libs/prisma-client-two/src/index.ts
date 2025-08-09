export { Prisma as PrismaTwo } from '../../prisma-schema-two/generated/prisma_two/client'; // Exporting types from Prisma Client
export { ItemModel as Item } from '../../prisma-schema-two/generated/prisma_two/models/Item'; // Exporting Item model type
export { StoreModel as Store } from '../../prisma-schema-two/generated/prisma_two/models/Store'; // Exporting Store model type
export * from './lib/prisma-client-two.module';
export * from './lib/prisma-two.service';

