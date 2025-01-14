import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CartService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createCartDto: Prisma.cartCreateInput) {
    return this.databaseService.cart.create({
      data: createCartDto
    })
  }

  findAll() {
    return this.databaseService.cart.findMany({})
  }

  findOne(id: number) {
    return this.databaseService.cart.findUnique({
      where: {
        id,
      }
    })
  }

  update(id: number, updateCartDto: Prisma.cartUpdateInput) {
    return this.databaseService.cart.update({
      where: {
        id,
      },
      data: updateCartDto
    })
  }

  remove(id: number) {
    return this.databaseService.cart.delete({
      where: {
        id,
      }
    })
  }
}
