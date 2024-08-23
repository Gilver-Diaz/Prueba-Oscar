import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './user.service';
import { createUserDto } from './DTO/create-user-dto';
import { Coin } from './entity/Coin.intity';
import { send } from 'process';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: createUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // ... other methods
  @Put()
  update(@Param('id') id: Coin, @Body() updateUserDto: createUserDto) {}
}
