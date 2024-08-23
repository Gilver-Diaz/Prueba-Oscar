import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Coin } from '../user/entity/Coin.intity';
import { CoinService } from './coin.service';
import { User } from 'src/user/entity/user.entity';

@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get(':id')
  getCoinById(@Param('id') id: number): Coin {
    return this.coinService.findCoinById(id);
  }

  @Get()
  getCoins(@Param('limit') limit: number = 10): Coin[] {
    return this.coinService.getCoins(limit);
  }
  @Post()
  createCoin(@Body() coin: Coin): Coin {
    return this.coinService.createCoin(coin);
  }

  @Put(':id')
  updateCoin(@Param('id') id: number, @Body() coin: Coin): Coin {
    return this.coinService.updateCoin(id, coin);
  }

  @Delete(':id')
  deleteCoin(@Param('id') id: number): boolean {
    return this.coinService.deleteCoin(id);
  }

  @Post('transfer')
  transferCoin(
    @Body('senderId') senderId: number,
    @Body('receiverId') receiverId: number,
    @Body('amount') amount: number,
  ): boolean {
    return this.coinService.transferCoin(senderId, receiverId, amount);
  }

  // Estos métodos requieren ser implementados en CoinService
  @Get('balance/:userId')
  getBalance(@Param('userId') userId: number): number {
    return this.coinService.getBalance(userId);
  }

  @Get('sent/:userId')
  getSentCoins(@Param('userId') userId: number): Coin[] {
    return this.coinService.findCoinsForUser(userId);
  }

  @Get('received/:userId')
  getReceivedCoins(@Param('userId') userId: number): Coin[] {
    return this.coinService.findReceivedCoinsForUser(userId);
  }

  @Get('top-users/:limit')
  getTopUsers(@Param('limit') limit: number): User[] {
    return this.coinService.getTopUsers(limit);
  }

  @Get('top-coins/:limit')
  getTopCoins(@Param('limit') limit: number): Coin[] {
    return this.coinService.getCoins(limit);
  }
}
