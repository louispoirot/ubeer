import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class BeersService {
  constructor(private readonly databaseService: DatabaseService,
    private readonly redisService: RedisService
  ) { }

  async create(createBeerDto: CreateBeerDto) {
    const newBeer = await this.databaseService.beers.create({
      data: createBeerDto,
    });
    await this.redisService.deleteKey('beers:all');
    return newBeer;
  }

  async findAll() {
    return this.redisService.getOrSetCache(
      'beers:all',
      300, // TTL 5 minutes
      async () => {
        return this.databaseService.beers.findMany({});
      },
    );
  }

  async findOne(id: number) {
    return this.databaseService.beers.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateBeerDto: UpdateBeerDto) {
    const updated = await this.databaseService.beers.update({
      where: {
        id,
      },
      data: updateBeerDto
    });
    await this.redisService.deleteKey('beers:all');
    return updated;
  }

  async remove(id: number) {
    const deleted = await this.databaseService.beers.delete({
      where: {
        id,
      }
    });
    await this.redisService.deleteKey('beers:all');
    return deleted;
  }
}
