import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createUserDto: Prisma.usersCreateInput) {
    return this.databaseService.users.create({
      data: createUserDto
    })
  }

  findAll(role?: 'USER' | 'ADMIN') {
    if (role) return this.databaseService.users.findMany({
      where: {
        role,
      }
    })
    return this.databaseService.users.findMany({})
  }

  findOne(id: number) {
    return this.databaseService.users.findUnique({
      where: {
        id,
      }
    })
  }

  update(id: number, updateUserDto: Prisma.usersUpdateInput) {
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
