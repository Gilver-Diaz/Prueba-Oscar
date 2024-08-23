import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersService } from '../src/user/user.service';
import { CoinService } from 'src/coin/coin.service';

@Global()
@Module({
  providers: [PrismaService, UsersService, CoinService],
  exports: [PrismaService, UsersService, CoinService],
})
export class PrismaModule {}
