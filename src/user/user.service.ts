import { Injectable } from '@nestjs/common';
import { createUserDto } from './DTO/create-user-dto';
import { v4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Hash, hash } from 'node:crypto';
import { Coin } from './entity/Coin.intity';

import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async createUser(
    name: string,
    plainPassword: string,
    coin: Coin,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    const newUser: User = {
      id: v4(),

      password: hashedPassword,
      username: 'gilver',
      phoneNumber: '222222',
      email: 'gilver@gmail.com',
      balance: 0,
      sentCoins: Coin[1],
      receivedCoins: Coin[2],
    };
    this.users.push(newUser);
    return newUser;
  }

  create(userDto: createUserDto): User {
    const newUser: User = {
      id: v4(),
      ...userDto,
      username: 'User1010',
      phoneNumber: '12345678',
      balance: 9,
      sentCoins: Coin[5],
      receivedCoins: Coin[5],
      password: bcrypt.hashSync('password', 10),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }
}
