import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) { }

  create(createUserDto: CreateUserDto) {
    return this.databaseService.users.create({
      data: createUserDto
    })
  }

  findAll(role?: 'USER' | 'ADMIN') {
    if (role) return this.databaseService.users.findMany({
      where: {
        role,
      },
      select: {
        id: true,
        name: true,
        password: false,
        email: true,
        role: true,
      }
    })
    return this.databaseService.users.findMany({
      select: {
        id: true,
        name: true,
        password: false,
        email: true,
        role: true,
      }
    })
  }

  findOne(id: number) {
    return this.databaseService.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        password: false,
        email: true,
        role: true,
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseService.users.update({
      where: {
        id,
      },
      data: updateUserDto
    })
  }

  remove(id: number) {
    return this.databaseService.users.delete({
      where: {
        id,
      }
    })
  }
}
