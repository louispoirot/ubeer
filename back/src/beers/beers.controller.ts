import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeersService } from './beers.service';
import { Prisma } from '@prisma/client';

@Controller('beers')
export class BeersController {
  constructor(private readonly beersService: BeersService) {}

  @Post()
  create(@Body() createBeerDto: Prisma.beersCreateInput) {
    return this.beersService.create(createBeerDto);
  }

  @Get()
  findAll() {
    return this.beersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeerDto: Prisma.beersUpdateInput) {
    return this.beersService.update(+id, updateBeerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beersService.remove(+id);
  }
}
