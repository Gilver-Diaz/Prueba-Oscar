import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { Coin } from './user/entity/Coin.intity';
import { UserModule } from './user/user.module';
import { CoinService } from './coin/coin.service';
import { CoinModule } from './coin/coin.module';
import { CoinController } from './coin/coin.controller';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from './user/user.service';

@Module({
  imports: [UserModule, CoinModule],
  controllers: [AppController, UsersController, CoinController],
  providers: [AppService, CoinService, PrismaService, UsersService],
})
export class AppModule {}
