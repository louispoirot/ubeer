import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createCartDto: CreateCartDto) {
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

  update(id: number, updateCartDto: UpdateCartDto) {
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
