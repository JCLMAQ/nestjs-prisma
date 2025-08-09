-- CreateTable
CREATE TABLE "public"."Store" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "storeId" INTEGER,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_name_key" ON "public"."Store"("name");

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;
