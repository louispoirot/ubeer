import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BreweryService } from './brewery.service';
import { Prisma } from '@prisma/client';
import { CreateBreweryDto } from './dto/create-brewery.dto';
import { UpdateBreweryDto } from './dto/update-brewery.dto';

@Controller('brewery')
export class BreweryController {
  constructor(private readonly breweryService: BreweryService) { }

  @Post()
  create(@Body() createBreweryDto: CreateBreweryDto) {
    return this.breweryService.create(createBreweryDto);
  }

  @Get()
  findAll() {
    return this.breweryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breweryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreweryDto: UpdateBreweryDto) {
    return this.breweryService.update(+id, updateBreweryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breweryService.remove(+id);
  }
}
