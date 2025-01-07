import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Not } from 'typeorm';

@Injectable()
export class UsersService {
    private users = [
        {
            "id":1,
            "username": "Louis Poirot",
            "password": "",
            "email": "louis.poirot@gmail.com",
            "role": "ADMIN",
        },
        {
            "id":2,
            "username": "Jean Poirot",
            "password": "",
            "email": "jean.poirot@gmail.com",
            "role": "USER",
        },
        {
            "id":3,
            "username": "Abel Poirot",
            "password": "",
            "email": "abel.poirot@gmail.com",
            "role": "USER",
        },
        {
            "id":4,
            "username": "Aimé Poirot",
            "password": "",
            "email": "aime.poirot@gmail.com",
            "role": "USER",
        },
        {
            "id":5,
            "username": "Aristide Poirot",
            "password": "",
            "email": "aristide.poirot@gmail.com",
            "role": "USER",
        }
    ]

    findAll(role?: 'USER' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role)
            if (!rolesArray.length) 
                throw new NotFoundException('User Role Not Found')
            return rolesArray
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        if (!user) throw new NotFoundException('User Not Found')

        return user
    }

    create(user: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        } 
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
