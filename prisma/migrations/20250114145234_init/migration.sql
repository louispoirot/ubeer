-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beers" (
    "id" SERIAL NOT NULL,
    "beer" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "brewery_id" INTEGER NOT NULL,

    CONSTRAINT "beers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brewery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "brewery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "beer_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "beers" ADD CONSTRAINT "beers_brewery_id_fkey" FOREIGN KEY ("brewery_id") REFERENCES "brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_beer_id_fkey" FOREIGN KEY ("beer_id") REFERENCES "beers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
