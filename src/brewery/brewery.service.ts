import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BreweryService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createBreweryDto: Prisma.breweryCreateInput) {
    return this.databaseService.brewery.create({
      data: createBreweryDto
    })
  }

  findAll() {
    return this.databaseService.brewery.findMany({})
  }

  findOne(id: number) {
    return this.databaseService.brewery.findUnique({
      where: {
        id,
      }
    })
  }

  update(id: number, updateBreweryDto: Prisma.breweryUpdateInput) {
    return this.databaseService.brewery.update({
      where: {
        id,
      },
      data: updateBreweryDto
    })
  }

  remove(id: number) {
    return this.databaseService.brewery.delete({
      where: {
        id,
      }
    })
  }
}
