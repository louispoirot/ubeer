import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BeersService {
  constructor(private readonly databaseService: DatabaseService) {}
  
  async create(createBeerDto: Prisma.beersCreateInput) {
    return this.databaseService.beers.create({
      data: createBeerDto
    })
  }

  async findAll() {
    return this.databaseService.beers.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.beers.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateBeerDto: Prisma.beersUpdateInput) {
    return this.databaseService.beers.update({
      where: {
        id,
      },
      data: updateBeerDto
    });
  }

  async remove(id: number) {
    return this.databaseService.beers.delete({
      where: {
        id,
      }
    });
  }
}
