import { Injectable } from '@nestjs/common';
import { Coin } from 'src/user/entity/Coin.intity';

@Injectable()
export class CoinService {
  getTopUsers(limit: number): import('../user/entity/user.entity').User[] {
    throw new Error();
  }
  getBalance(userId: number): number {
    throw new Error('Method not implemented.');
  }
  private coins: Coin[] = [];

  getCoins(limit: number): Coin[] {
    return this.coins;
  }

  createCoin(coin: Coin): Coin {
    coin.id = this.coins.length
      ? Math.max(...this.coins.map((c) => c.id)) + 1
      : 1;
    this.coins.push(coin);
    return coin;
  }

  deleteCoin(id: number): boolean {
    const index = this.coins.findIndex((coin) => coin.id === id);
    if (index !== -1) {
      this.coins.splice(index, 1);
      return true;
    }
    return false;
  }

  updateCoin(id: number, coin: Coin): Coin | null {
    const index = this.coins.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.coins[index] = { ...this.coins[index], ...coin };
      return this.coins[index];
    }
    return null;
  }

  findCoinById(id: number): Coin | undefined {
    return this.coins.find((coin) => coin.id === id);
  }

  findCoinsForUser(userId: number): Coin[] {
    return this.coins.filter((coin) => coin.senderId === userId);
  }

  findReceivedCoinsForUser(userId: number): Coin[] {
    return this.coins.filter((coin) => coin.receiverId === userId);
  }

  transferCoin(senderId: number, receiverId: number, amount: number): boolean {
    const sender = this.findCoinById(senderId);
    const receiver = this.findCoinById(receiverId);

    if (sender && receiver && sender.amount >= amount) {
      sender.amount -= amount;
      receiver.amount += amount;
      return true;
    }
    return false;
  }
}
